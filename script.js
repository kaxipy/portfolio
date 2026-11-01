const btn = document.getElementById('burger-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');

function setMenu(open) {
  menu.classList.toggle('menu-open', open);
  menu.classList.toggle('menu-closed', !open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'მენიუს დახურვა' : 'მენიუს გახსნა');
  icon.className = open ? 'fa-solid fa-xmark text-xl' : 'fa-solid fa-bars text-xl';
}

btn.addEventListener('click', () => setMenu(menu.classList.contains('menu-closed')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });
