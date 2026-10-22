const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.server-card').forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.type !== filter;
  });
}));

let toastTimer;
const toast = document.querySelector('#toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3600);
}
document.querySelectorAll('.configure-button').forEach(button => button.addEventListener('click', () => {
  showToast('Sample listing: add a verified server address and details before publishing.');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
