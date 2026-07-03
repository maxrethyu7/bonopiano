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
});
