document.addEventListener('DOMContentLoaded', function() {
  // Initialize Materialize components
  if (window.M) {
    var sidenavElems = document.querySelectorAll('.sidenav');
    if (sidenavElems.length) {
      M.Sidenav.init(sidenavElems, {
        edge: 'left',
        onOpenStart: function(el) {
          // position and make visible
          positionSidenav(el);
          // ensure it's fully onscreen
          el.style.transform = 'translateX(0)';
        },
        onCloseEnd: function(el) {
          // hide it off-canvas so its right edge isn't visible
          el.style.transform = 'translateX(-120%)';
        }
      });
    }
    // Ensure sidenav is positioned directly below the navbar when opened
    function positionSidenav(el) {
      var nav = document.querySelector('nav');
      if (!nav || !el) return;
      var navRect = nav.getBoundingClientRect();
      // Use the distance from the top of the viewport to nav's bottom
      var topPx = Math.round(navRect.bottom) + 'px';
      el.style.top = topPx;
    }
    // Initial positioning
    sidenavElems.forEach(function(el) { positionSidenav(el); });
    // Reposition on resize/scroll in case navbar height or page offset changes
    window.addEventListener('resize', function() { sidenavElems.forEach(positionSidenav); });
    window.addEventListener('scroll', function() { sidenavElems.forEach(positionSidenav); });
    var parallaxElems = document.querySelectorAll('.parallax');
    if (parallaxElems.length && M.Parallax) M.Parallax.init(parallaxElems);
    var dropdownElems = document.querySelectorAll('.dropdown-trigger');
    if (dropdownElems.length && M.Dropdown) {
      M.Dropdown.init(dropdownElems, {
        constrainWidth: false,
        coverTrigger: false,
        alignment: 'right',
        stopPropagation: false
      });
    }
  }

  // Make the sidenav-trigger toggle the sidenav (open on first click, close on second)
  // Use capture phase and stop propagation so Materialize's own handler doesn't double-toggle.
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.sidenav-trigger');
    if (!trigger) return;
    // Prevent Materialize's bound handler from running and handle toggle ourselves
    e.preventDefault();
    e.stopImmediatePropagation();
    var targetId = trigger.getAttribute('data-target') || trigger.dataset.target;
    if (!targetId) return;
    var sidenavEl = document.getElementById(targetId);
    if (!sidenavEl || !window.M) return;
    var instance = M.Sidenav.getInstance(sidenavEl);
    if (!instance) return;
    // Toggle with a tiny delay to avoid fighting inline styles set during open/close
    if (instance.isOpen) {
      instance.close();
    } else {
      instance.open();
    }
  }, true);

  // Delegated click handling for language toggle and dropdown
  document.addEventListener('click', function(e) {
    var toggle = e.target.closest('.language-toggle');
    if (toggle) {
      // If this is a Materialize dropdown trigger, let M.Dropdown handle it
      if (toggle.classList.contains('dropdown-trigger')) return;
      e.preventDefault();
      e.stopPropagation();
      var burger = toggle.closest('.language-burger');
      var menu = burger ? burger.querySelector('.language-dropdown') : null;
      if (menu) menu.classList.toggle('active');
      return;
    }

    var dropBtn = e.target.closest('.language-dropdown button');
    if (dropBtn) {
      var menu = dropBtn.closest('.language-dropdown');
      if (menu) menu.classList.remove('active');
      return;
    }

    // click outside closes any open language menus
    if (!e.target.closest('.language-burger')) {
      document.querySelectorAll('.language-dropdown.active').forEach(function(m) {
        m.classList.remove('active');
      });
    }
  });

  // Adjust the main header so its rendered width is ~80% of the viewport width
  function fitHeaderToViewport() {
    var title = document.querySelector('h1.header');
    var subtitle = document.querySelector('h2.header');
    var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (!viewportWidth) return;
    var desiredWidth = Math.min(viewportWidth * 0.9, 1200); // cap at 1000px

    // Create an offscreen clone for accurate measurement without affecting layout
    function measureCloneFontSize(el, baseline) {
      if (!el) return 0;
      var clone = el.cloneNode(true);
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '-9999px';
      clone.style.whiteSpace = 'normal';
      clone.style.display = 'inline-block';
      clone.style.width = 'auto';
      clone.style.maxWidth = 'none';
      clone.style.fontSize = baseline + 'px';
      document.body.appendChild(clone);
      var w = clone.getBoundingClientRect().width || 1;
      document.body.removeChild(clone);
      return w;
    }

    // Fit an element so its longest line approx equals desiredWidth
    // minEm: enforce a minimum font-size in em relative to root font-size (optional)
    function fitElement(el, baseline, maxFont, minEm) {
      if (!el) return 0;
      var measured = measureCloneFontSize(el, baseline);
      var scale = desiredWidth / measured;
      var newSize = Math.max(10, Math.floor(baseline * scale));
      newSize = Math.min(newSize, maxFont || 1000);
      if (minEm) {
        var rootFs = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
        var minPx = Math.round(minEm * rootFs);
        if (newSize < minPx) newSize = minPx;
      }
      el.style.fontSize = newSize + 'px';
      el.style.display = 'inline-block';
      el.style.textAlign = 'center';
      el.style.maxWidth = desiredWidth + 'px';
      if (el.parentElement) el.parentElement.style.textAlign = 'center';
      return newSize;
    }

    var titleFontSize = 0;
    if (title) {
      titleFontSize = fitElement(title, 240, 600, 1.5); // min 1.5em
    }

    if (subtitle) {
      var preferred = titleFontSize ? Math.floor(titleFontSize * 0.65) : 160;
      preferred = Math.max(10, preferred);
      // measure subtitle with baseline=preferred to know if it would overflow
      var subMeasured = measureCloneFontSize(subtitle, preferred);
      if (subMeasured > desiredWidth) {
        // scale down to fit
        var adj = Math.max(10, Math.floor(preferred * (desiredWidth / subMeasured)));
        subtitle.style.fontSize = adj + 'px';
      } else {
        subtitle.style.fontSize = preferred + 'px';
      }
      // enforce minimum subtitle size 1.4em
      var rootFs = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
      var minSubPx = Math.round(1.4 * rootFs);
      var currentSubPx = parseInt(window.getComputedStyle(subtitle).fontSize, 10) || 0;
      if (currentSubPx < minSubPx) subtitle.style.fontSize = minSubPx + 'px';
      subtitle.style.display = 'inline-block';
      subtitle.style.textAlign = 'center';
      if (subtitle.parentElement) subtitle.parentElement.style.textAlign = 'center';
      subtitle.style.maxWidth = desiredWidth + 'px';
    }
  }

  // Debounced resize handler
  var fitTimer = null;
  window.addEventListener('resize', function() {
    if (fitTimer) clearTimeout(fitTimer);
    fitTimer = setTimeout(function() { fitHeaderToViewport(); }, 120);
  });

  // Initialize gallery modal with keyboard and swipe navigation
  function initGalleryModal() {
    var thumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
    var modalEl = document.getElementById('gallery-modal');
    var modalImg = document.getElementById('gallery-modal-img');
    if (!thumbs.length || !modalEl || !modalImg) return;

    // Prevent double-initialization
    if (modalEl.dataset.galleryInit) return;
    modalEl.dataset.galleryInit = '1';

    // Initialize modal with a close callback to clear state
    var modalInstance = M.Modal.getInstance(modalEl);
    if (!modalInstance) {
      modalInstance = M.Modal.init(modalEl, {
        onCloseEnd: function() {
          // clear image src to release memory and allow re-opening
          try { modalImg.src = ''; } catch (e) {}
          // restore focus to last clicked thumbnail if present
          if (modalEl._lastThumb && typeof modalEl._lastThumb.focus === 'function') {
            try { modalEl._lastThumb.focus(); } catch (e) {}
          }
        }
      });
    } else {
      // ensure onCloseEnd is set
      try { modalInstance.options = Object.assign({}, modalInstance.options || {}, {
        onCloseEnd: function() { modalImg.src = ''; if (modalEl._lastThumb && modalEl._lastThumb.focus) modalEl._lastThumb.focus(); }
      }); } catch (e) {}
    }

    var images = thumbs.map(function(t) { return t.dataset.large || t.src; });
    var current = 0;

    // Create navigation buttons (if not already present)
    var content = modalEl.querySelector('.modal-content') || modalEl;

    // Create a dedicated invisible gallery box so buttons remain fixed
    var galleryBox = content.querySelector('.gallery-box');
    if (!galleryBox) {
      galleryBox = document.createElement('div');
      galleryBox.className = 'gallery-box';
      // move existing image into the gallery box
      galleryBox.appendChild(modalImg);
      // caption container
      var caption = document.createElement('div');
      caption.className = 'gallery-caption';
      caption.setAttribute('aria-live', 'polite');
      content.appendChild(galleryBox);
      content.appendChild(caption);
    }

    var prevBtn = content.querySelector('.gallery-prev');
    var nextBtn = content.querySelector('.gallery-next');
    var closeBtn = content.querySelector('.gallery-close');
    if (!prevBtn) {
      prevBtn = document.createElement('button');
      prevBtn.className = 'gallery-prev';
      prevBtn.setAttribute('aria-label', 'Previous image');
      prevBtn.innerHTML = '\u2039';
      content.appendChild(prevBtn);
    }
    if (!nextBtn) {
      nextBtn = document.createElement('button');
      nextBtn.className = 'gallery-next';
      nextBtn.setAttribute('aria-label', 'Next image');
      nextBtn.innerHTML = '\u203A';
      content.appendChild(nextBtn);
    }
    if (!closeBtn) {
      closeBtn = document.createElement('button');
      closeBtn.className = 'gallery-close';
      closeBtn.setAttribute('aria-label', 'Close gallery');
      closeBtn.innerHTML = '&times;';
      content.appendChild(closeBtn);
    }

    var captionEl = content.querySelector('.gallery-caption');

    function show(index) {
      current = (index % images.length + images.length) % images.length;
      modalImg.src = images[current];
      // set caption from alt attribute of the originating thumbnail if available
      var alt = thumbs[current] && thumbs[current].alt ? thumbs[current].alt : '';
      if (captionEl) captionEl.textContent = alt;
    }

    thumbs.forEach(function(thumb, idx) {
      thumb.style.cursor = 'pointer';
      thumb.addEventListener('click', function(e) {
        e.preventDefault();
        // remember which thumb opened the modal for focus restore
        modalEl._lastThumb = thumb;
        show(idx);
        modalInstance.open();
      });
    });

    prevBtn.addEventListener('click', function(e) { e.stopPropagation(); show(current - 1); });
    nextBtn.addEventListener('click', function(e) { e.stopPropagation(); show(current + 1); });
    closeBtn.addEventListener('click', function(e) { e.stopPropagation(); modalInstance.close(); });

    // Keyboard navigation while modal open
    document.addEventListener('keydown', function(e) {
      if (!modalInstance || !modalInstance.isOpen) return;
      if (e.key === 'ArrowLeft') { prevBtn.click(); }
      else if (e.key === 'ArrowRight') { nextBtn.click(); }
      else if (e.key === 'Escape') { modalInstance.close(); }
    });

    // Simple touch swipe detection on modal content
    var touchStartX = 0;
    var touchEndX = 0;
    var threshold = 30; // px
    content.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches.length) touchStartX = e.touches[0].clientX;
    }, { passive: true });
    content.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches.length) touchEndX = e.touches[0].clientX;
    }, { passive: true });
    content.addEventListener('touchend', function() {
      var dx = touchEndX - touchStartX;
      if (Math.abs(dx) > threshold) {
        if (dx > 0) prevBtn.click(); else nextBtn.click();
      }
      touchStartX = touchEndX = 0;
    });
  }

  // initialize gallery modal handlers
  initGalleryModal();

  // Run once after DOM is ready (and after any i18n text replacement)
  // Use a small timeout to allow translations to populate the header text
  setTimeout(fitHeaderToViewport, 180);
});
