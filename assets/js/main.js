/* Content Factory — main.js — Auto-generated */

// ═══ Dynamic Year ═══
document.addEventListener('DOMContentLoaded', function() {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ═══ Burger Menu ═══
  var burger = document.getElementById('burgerToggle');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // ═══ Search Toggle ═══
  var searchBtn = document.getElementById('searchToggle');
  var searchOverlay = document.getElementById('searchOverlay');
  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', function() {
      searchOverlay.classList.toggle('active');
      var input = searchOverlay.querySelector('input');
      if (input && searchOverlay.classList.contains('active')) input.focus();
    });
  }

  // ═══ Share Buttons ═══
  var shareConf = null;
  if (shareConf) initShare(shareConf);
});

function initShare(conf) {
  var btns = document.querySelectorAll('.share-btn');
  var url = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);

  var links = {
    vk: 'https://vk.com/share.php?url=' + url,
    telegram: 'https://t.me/share/url?url=' + url + '&text=' + title,
    ok: 'https://connect.ok.ru/offer?url=' + url,
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + url,
    twitter: 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title,
    linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url,
    whatsapp: 'https://wa.me/?text=' + title + '%20' + url,
    copy: null
  };

  btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var platform = btn.getAttribute('data-platform');
      if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(function() {
          btn.textContent = '✅';
          setTimeout(function() { btn.textContent = '🔗'; }, 2000);
        });
      } else if (links[platform]) {
        window.open(links[platform], '_blank', 'width=600,height=400');
      }
    });
  });
}
