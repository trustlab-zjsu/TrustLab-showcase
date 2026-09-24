(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-button');
  const navigation = document.getElementById('main-navigation');
  const menuLabel = menuButton?.querySelector('.menu-label');
  if (!menuButton || !navigation || !menuLabel) return;

  document.documentElement.classList.add('js');

  function setMenu(open, restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', open);
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);
    // Keep keyboard focus visible when a local destination closes the menu.
    const href = link.getAttribute('href');
    if (!href?.startsWith('#')) return;
    const section = document.querySelector(href);
    const heading = section?.querySelector('h1, h2');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });

  document.addEventListener('click', event => {
    if (!(event.target instanceof Node)) return;
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });

  const desktopLayout = window.matchMedia('(min-width: 821px)');
  desktopLayout.addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });
})();
