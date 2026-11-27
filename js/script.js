/* Portfólio: funcionalidades gerais (DOM, eventos, funções e condicionais) */
const SPOTIFY_URL_PADRAO = ''; // opcional: cole aqui o link da sua playlist para ficar fixo

document.addEventListener('DOMContentLoaded', () => {
  // 1. Marca a página atual no menu
  const pagina = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === pagina) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // 2. Entrada dos blocos ao rolar a página
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observador.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => observador.observe(el));

  // 3. Imagem ainda não adicionada: mostra o nome do arquivo esperado
  document.querySelectorAll('.frame img').forEach(img => {
    const faltando = () => img.parentElement.classList.add('empty');
    if (img.complete && img.naturalWidth === 0) faltando(); else img.addEventListener('error', faltando);
  });

  // 4. Lightbox com modal do Bootstrap
  const caixa = document.createElement('div');
  caixa.className = 'modal fade';
  caixa.tabIndex = -1;
  caixa.innerHTML = '<div class="modal-dialog modal-xl modal-dialog-centered"><div class="modal-content bg-transparent border-0"><button type="button" class="btn-close btn-close-white ms-auto mb-2" data-bs-dismiss="modal" aria-label="Fechar"></button><img class="img-fluid" alt=""></div></div>';
  document.body.appendChild(caixa);
  const modal = new bootstrap.Modal(caixa);
  const abrir = fig => {
    if (fig.classList.contains('empty')) return;
    const img = fig.querySelector('img'), grande = caixa.querySelector('img');
    grande.src = img.src; grande.alt = img.alt;
    modal.show();
  };
  document.querySelectorAll('.frame[data-lightbox]').forEach(fig => {
    fig.tabIndex = 0; fig.setAttribute('role', 'button');
    fig.addEventListener('click', () => abrir(fig));
    fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(fig); } });
  });

  // 5. Linha do tempo: abre e fecha os detalhes de cada momento
  document.querySelectorAll('.tl-btn').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const item = btn.closest('.tl-item');
      btn.setAttribute('aria-expanded', item.classList.toggle('open'));
    });
  });

  // 6. Botão de voltar ao topo
  const topo = document.createElement('button');
  topo.className = 'totop'; topo.type = 'button'; topo.textContent = '↑';
  topo.setAttribute('aria-label', 'Voltar ao topo');
  topo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(topo);
  window.addEventListener('scroll', () => topo.classList.toggle('show', window.scrollY > 600), { passive: true });

  // 7. Transição suave entre páginas
  document.querySelectorAll('a[href$=".html"]').forEach(a => {
    a.addEventListener('click', e => {
      if (e.ctrlKey || e.metaKey || e.shiftKey || a.target === '_blank') return;
      e.preventDefault();
      document.body.classList.add('leaving');
      setTimeout(() => { location.href = a.href; }, 250);
    });
  });
  window.addEventListener('pageshow', () => document.body.classList.remove('leaving'));
});