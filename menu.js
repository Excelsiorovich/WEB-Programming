// ===== Hamburger Menu =====
function toggleMenu() {
  const btn = document.querySelector('.hamburger-btn');
  const panel = document.querySelector('.side-menu');
  const overlay = document.querySelector('.menu-overlay');
  btn.classList.toggle('open');
  panel.classList.toggle('open');
  overlay.classList.toggle('active');
  document.body.style.overflow = panel.classList.contains('open') ? 'hidden' : '';
}

// Highlight current page in menu
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.side-menu nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === window.location.pathname.split('/').pop()
        || (window.location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
    // exact filename match
    const page = window.location.href.split('/').pop().split('?')[0] || 'index.html';
    if (link.getAttribute('href') === page) link.classList.add('active');
  });

  // Back to top
  const btn = document.querySelector('.back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 320);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
