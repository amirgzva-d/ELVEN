/* ELVEN shared mobile drawer controller — homepage behavior across all non-yeast pages. */
(function () {
  'use strict';
  if (window.__ELVEN_MOBILE_DRAWER_STATE_FIX__) return;
  window.__ELVEN_MOBILE_DRAWER_STATE_FIX__ = true;
  function initMobileDrawerState() {
    var nav = document.querySelector('#siteHeader #primaryNav, .header #primaryNav, .site-header #siteNav, .header .nav, .site-header .main-nav, .masthead .primary-nav');
    if (!nav) return;
    var header = nav.closest('header') || document.querySelector('#siteHeader, .site-header, .masthead');
    if (!header || document.getElementById('pdPrimaryNav')) return;
    var toggle = header.querySelector('[data-menu], #menuToggle, #contactNavToggle');
    if (!toggle) return;
    var backdrop = header.querySelector('.mobile-menu-backdrop') || document.querySelector('.mobile-menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('button');
      backdrop.type = 'button';
      backdrop.className = 'mobile-menu-backdrop';
      backdrop.setAttribute('aria-label', 'بستن منو');
      backdrop.setAttribute('aria-hidden', 'true');
      backdrop.tabIndex = -1;
    }
    if (backdrop.parentNode !== header) header.appendChild(backdrop);
    document.querySelectorAll('.mobile-menu-backdrop').forEach(function (other) { if (other !== backdrop) other.remove(); });
    var mobileQuery = window.matchMedia('(max-width: 768px)');
    var navOpenClass = nav.classList.contains('main-nav') || nav.classList.contains('primary-nav') ? 'is-open' : 'mobile-open';
    function isOpen() {
      return nav.classList.contains('mobile-open') || nav.classList.contains('is-open') || document.body.classList.contains('menu-drawer-open');
    }
    function syncToggle(open) {
      toggle.classList.toggle('is-open', open);
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
    }
    function closeMenu(restoreFocus) {
      nav.classList.remove('mobile-open', 'is-open', 'elven-mobile-drawer-portal');
      backdrop.classList.remove('is-visible', 'elven-mobile-backdrop-portal');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-drawer-open', 'pd-menu-open');
      document.documentElement.classList.remove('menu-drawer-open');
      syncToggle(false);
      if (restoreFocus && mobileQuery.matches && toggle.isConnected) toggle.focus({ preventScroll: true });
    }
    function openMenu() {
      if (!mobileQuery.matches) return;
      nav.classList.remove('mobile-open', 'is-open');
      nav.classList.add(navOpenClass);
      backdrop.classList.add('is-visible');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-drawer-open');
      syncToggle(true);
    }
    function stopHandledClick(event) {
      if (event.cancelable) event.preventDefault();
      event.stopImmediatePropagation();
    }
    window.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.nodeType !== 1) target = target.parentElement;
      if (!target || typeof target.closest !== 'function') return;
      var clickedToggle = target.closest('[data-menu], #menuToggle, #contactNavToggle');
      if (clickedToggle === toggle) {
        if (!mobileQuery.matches) return;
        stopHandledClick(event);
        if (isOpen()) closeMenu(false); else openMenu();
        return;
      }
      /* Always reset the trigger when a menu link is selected.
         Older page scripts may remove the drawer/body classes first; checking
         isOpen() before this branch would leave the hamburger stuck as an X. */
      if (nav.contains(target)) {
        if (target.closest('a')) closeMenu(false);
        return;
      }

      if (!isOpen()) return;
      if (target === backdrop || backdrop.contains(target)) {
        stopHandledClick(event);
        closeMenu(false);
        return;
      }
      stopHandledClick(event);
      closeMenu(false);
    }, true);
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeMenu(true);
      }
    }, true);
    window.addEventListener('resize', function () { if (!mobileQuery.matches && isOpen()) closeMenu(false); }, { passive: true });
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'باز کردن منو');
    backdrop.classList.remove('is-visible');
    backdrop.setAttribute('aria-hidden', 'true');
    if (!isOpen()) closeMenu(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMobileDrawerState, { once: true });
  else initMobileDrawerState();
})();
