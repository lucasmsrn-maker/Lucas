/* =====================================================================
   INTERAÇÕES DA PÁGINA
   Menu mobile · trilha de estudos · animações de entrada · formulário
   Os dados vêm de js/trilha.js (variável global "trilha").
   ===================================================================== */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dados = Array.isArray(window.trilha) ? window.trilha : (typeof trilha !== 'undefined' ? trilha : []);

  /* ---------- Utilitários ---------- */
  function esc(texto) {
    return String(texto == null ? '' : texto).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Ícones de linha dos blocos (repetem se houver mais blocos) ---------- */
  var ICONES = [
    '<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="m2 13 10 5 10-5"/><path d="m2 18 10 5 10-5" opacity=".5"/>',
    '<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.5-4.5"/>',
    '<path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
    '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  ];
  function icone(i, tam) {
    return '<svg width="' + (tam || 22) + '" height="' + (tam || 22) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONES[i % ICONES.length] + '</svg>';
  }

  /* ---------- Selos de status ---------- */
  var STATUS = {
    concluido: { rotulo: 'Concluído', svg: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>' },
    andamento: { rotulo: 'Em andamento', svg: '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6 1.5a4.5 4.5 0 0 1 0 9Z" fill="currentColor"/></svg>' },
    proximo:   { rotulo: 'Próximo', svg: '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2"/></svg>' },
  };
  function statusValido(s) { return STATUS[s] ? s : 'proximo'; }
  function selo(s) {
    s = statusValido(s);
    return '<span class="badge badge--' + s + '">' + STATUS[s].svg + STATUS[s].rotulo + '</span>';
  }

  /* ---------- Contagens ---------- */
  function contar(disciplinas) {
    var c = { concluido: 0, andamento: 0, proximo: 0, total: disciplinas.length };
    disciplinas.forEach(function (d) { c[statusValido(d.status)]++; });
    return c;
  }
  var todas = dados.reduce(function (acc, b) { return acc.concat(b.disciplinas || []); }, []);
  var geral = contar(todas);

  /* =====================================================================
     1. INDICADORES E BARRA DE PROGRESSO GERAL
     ===================================================================== */
  function renderIndicadores() {
    var pct = geral.total ? Math.round((geral.concluido / geral.total) * 100) : 0;
    var pctAnd = geral.total ? (geral.andamento / geral.total) * 100 : 0;
    var set = function (chave, valor) { $$('[data-stat="' + chave + '"]').forEach(function (el) { el.textContent = valor; }); };

    set('blocos', dados.length);
    set('concluidas', geral.concluido + '/' + geral.total);
    set('percentual', pct + '%');
    set('n-concluido', geral.concluido);
    set('n-andamento', geral.andamento);
    set('n-proximo', geral.proximo);

    var barra = $('#barra-geral');
    if (barra) {
      barra.setAttribute('aria-valuenow', pct);
      barra.setAttribute('aria-valuetext', pct + '% concluído: ' + geral.concluido + ' de ' + geral.total + ' disciplinas');
      $('[data-barra="concluido"]', barra).style.width = ((geral.concluido / (geral.total || 1)) * 100) + '%';
      $('[data-barra="andamento"]', barra).style.width = pctAnd + '%';
    }

    var sub = $('#titulo-estudos + p');
    if (sub) sub.textContent = 'Uma trilha de ' + dados.length + ' blocos e ' + geral.total + ' disciplinas, montada com a liderança de design.';
  }

  /* =====================================================================
     2. FAIXA ANIMADA (rolagem infinita)
     Cada metade repete os blocos duas vezes para cobrir telas largas;
     a segunda metade é cópia (aria-hidden) para o loop sem emendas.
     ===================================================================== */
  function renderFaixa() {
    var ul = $('#faixa-trilha');
    if (!ul) return;
    var item = function (b, i, dup) {
      return '<li class="flex shrink-0 items-center gap-3 pr-10 sm:pr-14"' + (dup ? ' data-dup aria-hidden="true"' : '') + '>' +
        '<span class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borda bg-cartao text-ink">' + icone(i, 20) + '</span>' +
        '<span class="font-serif text-xl text-ink sm:text-2xl">' + esc(b.bloco) + '</span>' +
        '<span class="ml-6 text-apoio sm:ml-10" aria-hidden="true">·</span></li>';
    };
    var html = '';
    for (var rep = 0; rep < 4; rep++) {
      dados.forEach(function (b, i) { html += item(b, i, rep > 0); });
    }
    ul.innerHTML = html;
  }

  /* =====================================================================
     3. O QUE ESTUDEI — abas (computador) e acordeão (celular)
     ===================================================================== */
  function cartaoDisciplina(d) {
    var s = statusValido(d.status);
    var texto = d.aprendizado
      ? '<p class="mt-2 text-[15px] leading-relaxed text-leitura">' + esc(d.aprendizado) + '</p>'
      : '<p class="mt-2 text-[15px] leading-relaxed text-sec">Ainda não iniciada.</p>';
    var rotulo = s === 'andamento' ? 'O que estou aprendendo' : 'O que aprendi';
    return '<li class="flex flex-col rounded-[22px] border border-borda/70 bg-fundo p-5 sm:p-6">' +
      '<div>' + selo(s) + '</div>' +
      '<h4 class="mt-4 font-serif text-lg font-semibold leading-snug">' + esc(d.nome) + '</h4>' +
      (s !== 'proximo' || d.aprendizado ? '<p class="t-label mt-4 text-sec">' + rotulo + '</p>' : '') +
      texto + '</li>';
  }

  function miniBarra(c, claro) {
    var pct = c.total ? (c.concluido / c.total) * 100 : 0;
    return '<span class="mt-3 block h-1.5 w-full overflow-hidden rounded-full ' + (claro ? 'bg-white/20' : 'bg-borda') + '" aria-hidden="true">' +
      '<span class="block h-full rounded-full ' + (claro ? 'bg-white' : 'bg-ink') + '" style="width:' + pct + '%"></span></span>';
  }

  // Abre por padrão o primeiro bloco que ainda não foi concluído
  var inicial = Math.max(0, dados.findIndex(function (b) { var c = contar(b.disciplinas || []); return c.concluido < c.total; }));

  function renderAbas() {
    var lista = $('#trilha-abas'), paineis = $('#trilha-paineis');
    if (!lista || !paineis) return;

    lista.innerHTML = dados.map(function (b, i) {
      var c = contar(b.disciplinas || []);
      return '<button type="button" role="tab" id="aba-' + i + '" aria-controls="painel-' + i + '" data-aba="' + i + '" ' +
        'class="aba group w-full rounded-[22px] border border-borda/70 p-5 text-left transition-colors">' +
        '<span class="flex items-center justify-between gap-3">' +
          '<span class="t-label aba-sub">Bloco ' + pad(i + 1) + '</span>' +
          '<span class="aba-sub text-[13px]">' + c.concluido + '/' + c.total + ' concluídas</span></span>' +
        '<span class="mt-2 flex items-center gap-3 font-serif text-xl font-medium">' + icone(i, 20) + esc(b.bloco) + '</span>' +
        '<span class="aba-barra"></span></button>';
    }).join('');

    paineis.innerHTML = dados.map(function (b, i) {
      var ds = b.disciplinas || [], c = contar(ds);
      return '<div role="tabpanel" id="painel-' + i + '" aria-labelledby="aba-' + i + '" tabindex="0" hidden ' +
        'class="h-full rounded-card border border-borda/70 bg-cartao p-8">' +
        '<div class="flex items-end justify-between gap-6">' +
          '<div><p class="t-label text-sec">Bloco ' + pad(i + 1) + '</p>' +
          '<h3 class="t-h3 mt-2 font-serif font-semibold">' + esc(b.bloco) + '</h3></div>' +
          '<p class="text-sm text-sec"><strong class="font-serif text-3xl font-medium text-ink">' + c.concluido + '</strong>/' + c.total + ' concluídas</p>' +
        '</div>' +
        '<ul class="mt-6 grid grid-cols-2 gap-4">' + ds.map(cartaoDisciplina).join('') + '</ul></div>';
    }).join('');

    function ativar(i, foco) {
      $$('[role="tab"]', lista).forEach(function (aba, j) {
        var ativa = j === i, c = contar(dados[j].disciplinas || []);
        aba.setAttribute('aria-selected', String(ativa));
        aba.tabIndex = ativa ? 0 : -1;
        aba.classList.toggle('bg-ink', ativa);
        aba.classList.toggle('text-white', ativa);
        aba.classList.toggle('border-ink', ativa);
        aba.classList.toggle('bg-cartao', !ativa);
        aba.classList.toggle('hover:bg-borda', !ativa);
        $$('.aba-sub', aba).forEach(function (el) { el.classList.toggle('text-vidro', ativa); el.classList.toggle('text-sec', !ativa); });
        $('.aba-barra', aba).innerHTML = miniBarra(c, ativa);
        if (ativa && foco) aba.focus();
      });
      $$('[role="tabpanel"]', paineis).forEach(function (p, j) { p.hidden = j !== i; });
    }

    lista.addEventListener('click', function (e) {
      var aba = e.target.closest('[role="tab"]');
      if (aba) ativar(Number(aba.dataset.aba));
    });
    // Navegação por teclado: setas, Home e End
    lista.addEventListener('keydown', function (e) {
      var atual = Number(document.activeElement.dataset.aba);
      if (isNaN(atual)) return;
      var n = dados.length, alvo = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') alvo = (atual + 1) % n;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') alvo = (atual - 1 + n) % n;
      if (e.key === 'Home') alvo = 0;
      if (e.key === 'End') alvo = n - 1;
      if (alvo !== null) { e.preventDefault(); ativar(alvo, true); }
    });

    ativar(inicial);
  }

  function renderAcordeao() {
    var raiz = $('#trilha-acordeao');
    if (!raiz) return;

    raiz.innerHTML = dados.map(function (b, i) {
      var ds = b.disciplinas || [], c = contar(ds), aberto = i === inicial;
      return '<div class="overflow-hidden rounded-[24px] border border-borda/70 bg-cartao">' +
        '<h3><button type="button" id="acc-btn-' + i + '" aria-expanded="' + aberto + '" aria-controls="acc-painel-' + i + '" ' +
          'class="flex min-h-[72px] w-full items-center gap-4 p-5 text-left">' +
          '<span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-borda bg-fundo">' + icone(i, 20) + '</span>' +
          '<span class="min-w-0 flex-1"><span class="t-label block text-sec">Bloco ' + pad(i + 1) + ' · ' + c.concluido + '/' + c.total + '</span>' +
          '<span class="mt-1 block font-serif text-xl font-medium leading-snug">' + esc(b.bloco) + '</span>' + miniBarra(c) + '</span>' +
          '<svg class="acc-seta shrink-0 transition-transform duration-300' + (aberto ? ' rotate-180' : '') + '" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
        '</button></h3>' +
        '<div id="acc-painel-' + i + '" role="region" aria-labelledby="acc-btn-' + i + '"' + (aberto ? '' : ' hidden') + ' class="px-5 pb-5">' +
          '<ul class="grid grid-cols-1 gap-3 md:grid-cols-2">' + ds.map(cartaoDisciplina).join('') + '</ul></div></div>';
    }).join('');

    raiz.addEventListener('click', function (e) {
      var btn = e.target.closest('button[aria-expanded]');
      if (!btn) return;
      var abrir = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(abrir));
      document.getElementById(btn.getAttribute('aria-controls')).hidden = !abrir;
      $('.acc-seta', btn).classList.toggle('rotate-180', abrir);
    });
  }

  /* =====================================================================
     4. MENU MOBILE (tela cheia)
     ===================================================================== */
  function iniciarMenu() {
    var menu = $('#menu-mobile'), abrir = $('#menu-abrir'), fechar = $('#menu-fechar');
    if (!menu || !abrir) return;

    function setAberto(aberto) {
      menu.classList.toggle('hidden', !aberto);
      menu.classList.toggle('flex', aberto);
      abrir.setAttribute('aria-expanded', String(aberto));
      document.body.style.overflow = aberto ? 'hidden' : '';
      (aberto ? fechar : abrir).focus();
    }
    abrir.addEventListener('click', function () { setAberto(true); });
    fechar.addEventListener('click', function () { setAberto(false); });
    $$('[data-menu-link]', menu).forEach(function (el) {
      el.addEventListener('click', function () { setAberto(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) setAberto(false);
    });
    // Fecha o menu se a tela for ampliada para o tamanho de computador
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
      if (mq.matches && !menu.classList.contains('hidden')) setAberto(false);
    });
  }

  /* =====================================================================
     5. MODAL DO FORMULÁRIO
     ===================================================================== */
  function iniciarFormulario() {
    var modal = $('#modal-conversa'), form = $('#form-conversa'), sucesso = $('#form-sucesso'), erro = $('#form-erro');
    if (!modal || !form) return;

    function abrir() {
      form.reset();
      form.classList.remove('hidden');
      sucesso.classList.add('hidden');
      erro.classList.add('hidden');
      if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
      $('#campo-nome').focus();
    }
    function fechar() { if (modal.open) modal.close(); }

    $$('[data-open-form]').forEach(function (el) { el.addEventListener('click', abrir); });
    $$('[data-close-form]', modal).forEach(function (el) { el.addEventListener('click', fechar); });
    // Clique fora do cartão fecha o modal
    modal.addEventListener('click', function (e) { if (e.target === modal) fechar(); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim(), horario = form.horario.value.trim();
      if (!nome || !horario) {
        erro.classList.remove('hidden');
        (nome ? form.horario : form.nome).focus();
        return;
      }

      /* -------------------------------------------------------------
         ENVIO REAL: hoje os dados não saem do navegador.
         Para receber as respostas, conecte um serviço aqui. Exemplo com
         Formspree (crie um formulário em formspree.io e troque SEU_ID):

           fetch('https://formspree.io/f/SEU_ID', {
             method: 'POST',
             body: new FormData(form),
             headers: { Accept: 'application/json' }
           });

         Para Google Forms, use a URL "formResponse" do formulário e os
         nomes dos campos "entry.XXXX" no lugar de "nome" e "horario".
         ------------------------------------------------------------- */

      $('[data-nome]', sucesso).textContent = ', ' + nome.split(' ')[0];
      $('[data-horario]', sucesso).textContent = horario;
      form.classList.add('hidden');
      sucesso.classList.remove('hidden');
      sucesso.focus();
    });
  }

  /* =====================================================================
     6. ANIMAÇÕES DE ENTRADA (fade + leve subida)
     ===================================================================== */
  function iniciarAnimacoes() {
    var els = $$('.reveal');
    if (reduzMovimento || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* =====================================================================
     7. FOTO: mostra a imagem se existir; senão, mantém o placeholder
     ===================================================================== */
  function iniciarFoto() {
    var img = $('#foto'), ph = $('#foto-placeholder');
    if (!img) return;
    function mostrar() { img.classList.remove('hidden'); if (ph) ph.remove(); }
    if (img.complete && img.naturalWidth > 0) mostrar();
    else img.addEventListener('load', mostrar);
    img.addEventListener('error', function () { img.remove(); });
  }

  /* ---------- Início ---------- */
  renderIndicadores();
  renderFaixa();
  renderAbas();
  renderAcordeao();
  iniciarMenu();
  iniciarFormulario();
  iniciarAnimacoes();
  iniciarFoto();
  var ano = $('#ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
