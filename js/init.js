document.addEventListener('DOMContentLoaded', function() {
  // Initialize Materialize components
  if (window.M) {
    var sidenavElems = document.querySelectorAll('.sidenav');
    if (sidenavElems.length) M.Sidenav.init(sidenavElems);
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
