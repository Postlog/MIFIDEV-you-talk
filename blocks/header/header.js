function initSiteHeader() {
  var header = document.querySelector('.header');
  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');

  if (!header || !burger || !nav) {
    return;
  }

  function setMenuState(isOpen) {
    header.classList.toggle('header--open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  }

  burger.addEventListener('click', function () {
    setMenuState(!header.classList.contains('header--open'));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.classList.contains('header--open')) {
      setMenuState(false);
      burger.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1023) {
      setMenuState(false);
    }
  });
}

if (document.querySelector('.header')) {
  initSiteHeader();
}
