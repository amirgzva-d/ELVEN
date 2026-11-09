/* ELVEN mobile drawer state fix — one authoritative open/close path for shared navigation. */
(function () {
  'use strict';

  if (window.__ELVEN_MOBILE_DRAWER_STATE_FIX__) return;
  window.__ELVEN_MOBILE_DRAWER_STATE_FIX__ = true;

  function initMobileDrawerState() {
    /* The yeast detail page has its own portal drawer that restores moved nodes
       and body scroll position. Keep that dedicated controller authoritative. */
    if (document.getElementById('pdPrimaryNav')) return;

    var nav = document.querySelector(
      '#siteHeader #primaryNav, .header #primaryNav, .site-header #siteNav, ' +
      '.header .nav, .site-header .main-nav, .masthead .primary-nav'
    );
    if (!nav) return;

    var header = nav.closest('header') || document.querySelector('#siteHeader, .site-header, .masthead');
    var toggle = header && header.querySelector('[data-menu], #menuToggle, #contactNavToggle');
    if (!toggle) return;

    var backdrops = Array.prototype.slice.call(document.querySelectorAll('.mobile-menu-backdrop'));
    var mobileQuery = window.matchMedia('(max-width: 768px)');
    var navOpenClass = nav.classList.contains('main-nav') || nav.classList.contains('primary-nav')
      ? 'is-open'
      : 'mobile-open';

    function isOpen() {
      return nav.classList.contains('mobile-open') ||
        nav.classList.contains('is-open') ||
        document.body.classList.contains('menu-drawer-open') ||
        document.body.classList.contains('pd-menu-open');
    }

    function syncToggle(open) {
      toggle.classList.toggle('is-open', open);
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
    }

    function closeMenu(restoreFocus) {
      nav.classList.remove('mobile-open', 'is-open', 'elven-mobile-drawer-portal');
      backdrops.forEach(function (backdrop) {
        backdrop.classList.remove('is-visible', 'elven-mobile-backdrop-portal');
        backdrop.setAttribute('aria-hidden', 'true');
      });
      document.body.classList.remove('menu-drawer-open', 'pd-menu-open');
      document.documentElement.classList.remove('menu-drawer-open');
      syncToggle(false);

      if (restoreFocus && mobileQuery.matches && toggle.isConnected) {
        toggle.focus({ preventScroll: true });
      }
    }

    function openMenu() {
      if (!mobileQuery.matches) return;
      nav.classList.remove('mobile-open', 'is-open');
      nav.classList.add(navOpenClass);
      backdrops.forEach(function (backdrop) {
        backdrop.classList.add('is-visible');
        backdrop.setAttribute('aria-hidden', 'false');
      });
      document.body.classList.add('menu-drawer-open');
      syncToggle(true);
    }

    function stopOutsideAction(event) {
      if (event.cancelable) event.preventDefault();
      event.stopImmediatePropagation();
    }

    document.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.nodeType !== 1) target = target.parentElement;
      if (!target || typeof target.closest !== 'function') return;

      var clickedToggle = target.closest('[data-menu], #menuToggle, #contactNavToggle');
      if (clickedToggle === toggle) {
        if (!mobileQuery.matches) return;
        stopOutsideAction(event);
        if (isOpen()) closeMenu(false);
        else openMenu();
        return;
      }

      if (!isOpen()) return;

      if (nav.contains(target)) {
        if (target.closest('a')) closeMenu(false);
        return;
      }

      /* Taps on the backdrop or anywhere outside the drawer close the entire
         state without triggering the hidden page control underneath it. */
      stopOutsideAction(event);
      closeMenu(false);
    }, true);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeMenu(true);
      }
    }, true);

    window.addEventListener('resize', function () {
      if (!mobileQuery.matches && isOpen()) closeMenu(false);
    }, { passive: true });

    /* Repair any stale state left by older page-level handlers on initial load. */
    if (!isOpen()) closeMenu(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileDrawerState, { once: true });
  } else {
    initMobileDrawerState();
  }
})();
