/* ===========================
   ACCORDION HABILIDADES
   =========================== */
const accordionItens = document.querySelectorAll('.accordion-item');

accordionItens.forEach(item => {
  const cabecalho = item.querySelector('.accordion-cabecalho');

  cabecalho.addEventListener('click', () => {
    const aberto = item.classList.contains('aberto');

    accordionItens.forEach(i => i.classList.remove('aberto'));

    if (!aberto) {
      item.classList.add('aberto');
    }
  });
});

/* ===========================
   BOTÃO VOLTAR AO TOPO
   =========================== */
const btnTopo = document.querySelector('.btn-topo');

if (btnTopo) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add('visivel');
    } else {
      btnTopo.classList.remove('visivel');
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
