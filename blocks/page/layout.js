(function () {
  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');

  if (!headerSlot || !footerSlot) {
    return;
  }

  var root = headerSlot.getAttribute('data-root') || '../';

  function loadPartial(path) {
    return fetch(root + path).then(function (response) {
      if (!response.ok) {
        throw new Error(path);
      }

      return response.text();
    });
  }

  Promise.all([
    loadPartial('blocks/header/header.html'),
    loadPartial('blocks/footer/footer.html')
  ]).then(function (parts) {
    headerSlot.outerHTML = parts[0];
    footerSlot.outerHTML = parts[1];

    var script = document.createElement('script');
    script.src = root + 'blocks/header/header.js';
    document.body.appendChild(script);
  }).catch(function () {
    headerSlot.innerHTML = '<p class="visually-hidden">Шапка сайта недоступна без локального сервера.</p>';
    footerSlot.innerHTML = '<p class="visually-hidden">Подвал сайта недоступен без локального сервера.</p>';
  });
})();
