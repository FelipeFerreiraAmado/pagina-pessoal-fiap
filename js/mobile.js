/* ===========================
   MENU HAMBURGUER (MOBILE)
   =========================== */
const btnMenu = document.querySelector('.btn-menu');
const menuNav = document.querySelector('nav ul');

if (btnMenu && menuNav) {
  btnMenu.addEventListener('click', () => {
    menuNav.classList.toggle('ativo');
    btnMenu.classList.toggle('ativo');
  });

  menuNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuNav.classList.remove('ativo');
      btnMenu.classList.remove('ativo');
    });
  });
}
