document.addEventListener('DOMContentLoaded', function() {
  var components = document.querySelectorAll('[data-component]');
  var requests = Array.from(components).map(function(placeholder) {
    var name = placeholder.getAttribute('data-component');
    return fetch('components/' + name + '.html')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Failed to load component "' + name + '": ' + response.status);
        }
        return response.text();
      })
      .then(function(markup) {
          if (name === 'meta') {
            var pageUrl = new URL(window.location.href);
            pageUrl.search = '';
            pageUrl.hash = '';
            var values = {
              title: placeholder.dataset.title,
              description: placeholder.dataset.description,
              canonical: pageUrl.href,
              image: new URL('assets/BONO_Homepage_poster.jpg', pageUrl.origin).href
            };
            markup = markup.replace(/\{\{(\w+)\}\}/g, function(match, key) {
              return values[key].replace(/[&<>"']/g, function(character) {
                return {
                  '&': '&amp;',
                  '<': '&lt;',
                  '>': '&gt;',
                  '"': '&quot;',
                  "'": '&#39;'
                }[character];
              });
            });
            placeholder.insertAdjacentHTML('beforebegin', markup);
            placeholder.remove();
            return;
          }

          placeholder.innerHTML = markup;
          if (name === 'header') {
          var currentPage = window.location.pathname.split('/').pop() || 'index.html';
          placeholder.querySelectorAll('#nav-mobile a').forEach(function(link) {
            var item = link.closest('li');
            if (item) {
              item.classList.toggle('active', new URL(link.href).pathname.split('/').pop() === currentPage);
            }
          });
        }
      });
  });

  Promise.all(requests)
    .then(function() {
      document.dispatchEvent(new CustomEvent('componentsLoaded'));
    })
    .catch(function(error) {
      console.error('Failed to load page components.', error);
    });
});
