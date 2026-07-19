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
    // Ensure mobile line-break behaviour before measuring
    ensureTitleLineBreak();
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

    // Grow an element's font-size (px) by binary-search so its measured width
    // approaches desiredWidth without exceeding it. Returns final font-size px.
    function growElementToFill(el, minPx, maxPx) {
      if (!el) return 0;
      minPx = Math.max(6, Math.floor(minPx || 6));
      maxPx = Math.max(minPx, Math.floor(maxPx || minPx));
      var lo = minPx, hi = maxPx, best = minPx;
      var iter = 0;
      while (lo <= hi && iter < 20) {
        iter++;
        var mid = Math.floor((lo + hi) / 2);
        var w = measureCloneFontSize(el, mid);
        if (w <= desiredWidth) {
          best = mid;
          lo = mid + 1; // try larger
        } else {
          hi = mid - 1; // too large
        }
      }
      try { el.style.fontSize = best + 'px'; } catch (e) {}
      return best;
    }

    // Fit an element so its longest line approx equals desiredWidth
    // minEm: enforce a minimum font-size in em relative to root font-size (optional)
    function fitElement(el, baseline, maxFont, minEm) {
      if (!el) return 0;
      var measured = measureCloneFontSize(el, baseline);
      var scale = desiredWidth / measured;
      var newSize = Math.max(10, Math.floor(baseline * scale));
      // Respect explicit CSS variable --title-max-font-size if set (px)
      var rootStyles = window.getComputedStyle(document.documentElement);
      var cssMax = rootStyles.getPropertyValue('--title-max-font-size');
      var cssMaxPx = cssMax ? parseInt(cssMax, 10) : NaN;
      var effectiveMax = !isNaN(cssMaxPx) ? cssMaxPx : (maxFont || 1000);
      newSize = Math.min(newSize, effectiveMax);
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

    var titleEls = Array.prototype.slice.call(document.querySelectorAll('h1.header')) || [];
    var titleFontSize = 0;
    if (titleEls.length) {
      // Try measuring and growing the first title to fill desiredWidth
      var first = titleEls[0];
      // compute limits
      var rootStyles = window.getComputedStyle(document.documentElement);
      var cssMax = rootStyles.getPropertyValue('--title-max-font-size');
      var cssMaxPx = cssMax ? parseInt(cssMax, 10) : NaN;
      var maxLimit = !isNaN(cssMaxPx) ? cssMaxPx : 600;
      // start from a reasonable baseline
      var baseline = parseInt(window.getComputedStyle(first).fontSize, 10) || 24;
      // ensure we don't exceed the CSS maxLimit or a very large size
      titleFontSize = growElementToFill(first, Math.round(baseline * 0.6), maxLimit);
      // apply the same size to other h1.header elements so they match
      for (var t = 1; t < titleEls.length; t++) {
        try { titleEls[t].style.fontSize = titleFontSize + 'px'; } catch (e) {}
      }
    }

    if (subtitle) {
      // Subtitle: target a fraction of title size but grow to fill if possible
      var rootFs = parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
      var minSubPx = Math.round(1.0 * rootFs);
      var subMaxCap = titleFontSize ? Math.max(12, Math.floor(titleFontSize * 0.85)) : 240;
      // Try to grow subtitle to fill width but not exceed subMaxCap
      var subPx = growElementToFill(subtitle, minSubPx, subMaxCap);
      subtitle.style.display = 'inline-block';
      subtitle.style.textAlign = 'center';
      if (subtitle.parentElement) subtitle.parentElement.style.textAlign = 'center';
      subtitle.style.maxWidth = desiredWidth + 'px';
      // Ensure at least a small gap: title > subtitle
      try {
        var compTitlePx = titleFontSize || (parseInt(window.getComputedStyle(titleEls[0]).fontSize, 10) || 0);
        var compSubPx = subPx || (parseInt(window.getComputedStyle(subtitle).fontSize, 10) || 0);
        if (compTitlePx <= compSubPx && titleEls[0]) {
          var newTitle = compSubPx + 4;
          titleEls[0].style.fontSize = newTitle + 'px';
          for (var u = 1; u < titleEls.length; u++) try { titleEls[u].style.fontSize = newTitle + 'px'; } catch(e){}
        }
      } catch (e) {}
    }
  }

  // Debounced resize handler
  var fitTimer = null;
  window.addEventListener('resize', function() {
    if (fitTimer) clearTimeout(fitTimer);
    fitTimer = setTimeout(function() { fitHeaderToViewport(); }, 120);
  });

  // Insert or remove a line-break between the first two words of the title
  // on narrow viewports while preserving any inline markup (styles/colors).
  function ensureTitleLineBreak() {
    var titleEl = document.querySelector('h1.header');
    if (!titleEl) return;
    var vp = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var mobileMax = 600;

    // If on mobile: insert a single generated <br> after the first word,
    // but preserve any existing inline tags and styling.
    if (vp <= mobileMax) {
      // If we've already inserted a generated break, nothing to do.
      if (titleEl.querySelector('br[data-generated="true"]')) {
        // still ensure centered
        titleEl.style.textAlign = 'center';
        if (titleEl.parentElement) titleEl.parentElement.style.textAlign = 'center';
        return;
      }

      var original = titleEl.textContent || '';
      var trimmed = original.trim();
      // Find first whitespace after the first word in the trimmed text
      var idxTrimmed = trimmed.search(/\s+/);
      if (idxTrimmed === -1) return;
      // Map trimmed index back to original textContent index
      var startIndex = original.indexOf(trimmed);
      var firstSpaceIndex = (startIndex >= 0) ? (startIndex + idxTrimmed) : idxTrimmed;

      // Find the text node and offset that correspond to that character index
      var res = findTextNodeAt(titleEl, firstSpaceIndex);
      if (!res) return;
      var node = res.node;
      var offset = res.offset;
      // If node is a text node, split it at offset. splitText returns the second node.
      if (node && node.nodeType === Node.TEXT_NODE) {
        try {
          var second = node.splitText(offset);
          // Keep a visible space between the split words: insert a non-breaking space
          var br = document.createElement('br');
          br.setAttribute('data-generated', 'true');
          node.parentNode.insertBefore(br, second);
          var nbsp = document.createTextNode('\u00A0');
          node.parentNode.insertBefore(nbsp, second);
        } catch (e) {
          // fallback: if splitText fails, do nothing
          console.warn('splitText failed', e);
        }
      }
      titleEl.style.textAlign = 'center';
      if (titleEl.parentElement) titleEl.parentElement.style.textAlign = 'center';
      return;
    }

    // On larger screens: remove any generated <br> and normalize text nodes
    var generated = titleEl.querySelectorAll('br[data-generated="true"]');
    if (generated && generated.length) {
      generated.forEach(function(b){ b.parentNode.removeChild(b); });
      // Normalizing will merge adjacent text nodes so original spacing returns
      try { titleEl.normalize(); } catch(e){}
    }
    titleEl.style.textAlign = '';
    if (titleEl.parentElement) titleEl.parentElement.style.textAlign = '';
  }

  // Use a TreeWalker to iterate text nodes in document order and find the node
  // and offset for the given global character index.
  function findTextNodeAt(root, index) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var i = index;
    var node = walker.nextNode();
    while (node) {
      var len = node.nodeValue.length;
      if (i <= len - 1) return { node: node, offset: i };
      i -= len;
      node = walker.nextNode();
    }
    return null;
  }

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

  // Responsive conversion: transform narrow .results-table into card list
  function buildResultsCards(table) {
    var caption = table.querySelector('caption');
    var headers = Array.from(table.querySelectorAll('thead th')).map(function(h){ return h.textContent.trim(); });
    var rows = Array.from(table.querySelectorAll('tbody tr'));
    var container = document.createElement('div');
    container.className = 'results-cards';
    if (caption) {
      var cap = document.createElement('div'); cap.className = 'results-cards-caption'; cap.innerHTML = caption.innerHTML; container.appendChild(cap);
    }
    rows.forEach(function(r){
      var cells = Array.from(r.children);
      // Expect first cell to be th (label) followed by td values
      if (cells.length < 2) return;
      var label = cells[0].textContent.trim();
      var vals = cells.slice(1).map(function(c){ return c.innerHTML; });
      var card = document.createElement('div'); card.className = 'result-card';
      var row = document.createElement('div'); row.className = 'result-row';
      var lbl = document.createElement('div'); lbl.className = 'result-label'; lbl.textContent = label;
      var valsWrap = document.createElement('div'); valsWrap.className = 'result-values';
      vals.forEach(function(v){ var d = document.createElement('div'); d.className = 'result-val'; d.innerHTML = v; valsWrap.appendChild(d); });
      row.appendChild(lbl); row.appendChild(valsWrap); card.appendChild(row); container.appendChild(card);
    });
    return container;
  }

  var responsiveTables = [];
  function updateResponsiveTables() {
    var vp = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var tables = Array.from(document.querySelectorAll('table.results-table'));
    tables.forEach(function(table){
      var marker = table.dataset._responsiveCardId;
      if (vp <= 600) {
        if (marker) return; // already converted
        var cards = buildResultsCards(table);
        table.parentNode.insertBefore(cards, table);
        table.style.display = 'none';
        // mark
        table.dataset._responsiveCardId = '1';
        responsiveTables.push({ table: table, cards: cards });
      } else {
        if (!marker) return; // nothing to do
        // remove cards
        var entryIndex = responsiveTables.findIndex(function(e){ return e.table === table; });
        if (entryIndex !== -1) {
          var entry = responsiveTables[entryIndex];
          try { entry.cards.parentNode.removeChild(entry.cards); } catch(e) {}
          responsiveTables.splice(entryIndex, 1);
        }
        table.style.display = '';
        delete table.dataset._responsiveCardId;
      }
    });
  }

  // run once and on resize
  updateResponsiveTables();
  window.addEventListener('resize', function(){ if (typeof updateResponsiveTables === 'function') updateResponsiveTables(); });

  // Run once after DOM is ready (and after any i18n text replacement)
  // Use a small timeout to allow translations to populate the header text
  setTimeout(fitHeaderToViewport, 180);
});
