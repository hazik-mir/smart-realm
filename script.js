const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.thumb').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.thumb').forEach(item => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
  const hero = document.querySelector('#hero-image');
  const title = document.querySelector('#hero-title');
  const copy = document.querySelector('#hero-copy');
  hero.style.opacity = '.15';
  window.setTimeout(() => {
    hero.src = button.dataset.image;
    hero.alt = button.dataset.alt;
    title.innerHTML = button.dataset.title;
    copy.textContent = button.dataset.copy;
    hero.style.opacity = '1';
  }, 140);
}));

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  document.querySelectorAll('[data-reveal]').forEach(card => observer.observe(card));
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const scenes = document.querySelectorAll('.hero-frame, .realm-card');
  let waiting = false;
  const updateScenes = () => {
    const view = window.innerHeight;
    scenes.forEach(scene => {
      const box = scene.getBoundingClientRect();
      if (box.bottom < 0 || box.top > view) return;
      const progress = (view - box.top) / (view + box.height) - .5;
      const image = scene.querySelector('.hero-image, .card-image');
      if (image) image.style.setProperty('--scroll-shift', `${progress * -22}px`);
    });
    waiting = false;
  };
  window.addEventListener('scroll', () => {
    if (!waiting) {
      requestAnimationFrame(updateScenes);
      waiting = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateScenes);
}
