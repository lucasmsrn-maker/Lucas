/* =====================================================================
   INTERAÇÕES DA PÁGINA
   Menu mobile · trilha de estudos · animações de entrada
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


  /* ---------- Bloco detalhado (protótipo) ---------- */
  var CHEV = '<svg class="shrink-0 transition-transform duration-300 group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  function cartaoDetalhe(d, n) {
    var s = statusValido(d.status);
    var rotulo = s === 'andamento' ? 'O que estou aprendendo' : 'O que aprendi';
    var aprendi = d.aprendizado
      ? '<p class="t-label mt-5 text-sec">' + rotulo + '</p><p class="mt-1 text-[15px] leading-relaxed text-leitura">' + esc(d.aprendizado) + '</p>'
      : '<p class="mt-5 text-[15px] leading-relaxed text-sec">Ainda não iniciada.</p>';
    var refs = (d.referencias || []).map(function (r) {
      return '<li class="rounded-full border border-borda bg-cartao px-3 py-1.5 text-[13px] leading-snug text-leitura">' + esc(r) + '</li>';
    }).join('');
    var gupy = d.naGupy
      ? '<div class="mt-4 rounded-2xl bg-cartao p-4"><p class="t-label text-sec">Na Gupy</p><p class="mt-1 text-[15px] leading-relaxed text-ink">' + esc(d.naGupy) + '</p></div>' : '';
    var mais = (refs || gupy)
      ? '<details class="group mt-5 border-t border-borda pt-1"><summary class="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">' +
        'Referências e aplicação na Gupy' + CHEV + '</summary><div class="pb-1 pt-2">' +
        (refs ? '<p class="t-label text-sec">Estudei com</p><ul class="mt-2 flex flex-wrap gap-2">' + refs + '</ul>' : '') + gupy + '</div></details>' : '';
    return '<li class="rounded-[22px] border border-borda/70 bg-fundo p-5 sm:p-6">' +
      '<div class="flex flex-wrap items-center justify-between gap-3"><p class="t-label text-sec">Disciplina ' + pad(d.num || n) + '</p>' + selo(s) + '</div>' +
      '<h4 class="mt-3 font-serif text-xl font-semibold leading-snug">' + esc(d.nome) + '</h4>' +
      (d.oQue ? '<p class="mt-2 text-[15px] leading-relaxed text-leitura">' + esc(d.oQue) + '</p>' : '') +
      (d.porque ? '<div class="mt-4 border-l-2 border-ink pl-4"><p class="t-label text-sec">' + esc(d.porqueRotulo || 'Por que vem primeiro') + '</p><p class="mt-1 text-[15px] leading-relaxed text-ink">' + esc(d.porque) + '</p></div>' : '') +
      aprendi + mais + '</li>';
  }
  function extrasBloco(b) {
    var h = '';
    if (b.entregavel) {
      var e = b.entregavel;
      h += '<div class="on-dark mt-4 rounded-[22px] bg-ink p-6 text-white sm:p-8">' +
        '<p class="t-label text-vidro">' + esc(e.rotulo) + '</p>' +
        '<h4 class="mt-2 font-serif text-2xl font-medium leading-snug">' + esc(e.titulo) + '</h4>' +
        '<p class="mt-2 text-[15px] leading-relaxed text-white/80">' + esc(e.texto) + '</p>' +
        '<ol class="mt-5 flex flex-col gap-3">' + (e.passos || []).map(function (p, i) {
          return '<li class="flex gap-3 text-[15px] leading-snug text-white/90"><span class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/40 text-[12px]">' + (i + 1) + '</span><span>' + esc(p) + '</span></li>';
        }).join('') + '</ol></div>';
    }
    if (b.criterios && b.criterios.length) {
      h += '<div class="mt-4 rounded-[22px] border border-borda/70 bg-fundo p-5 sm:p-6"><p class="t-label text-sec">Para dar o bloco como fechado</p><ul class="mt-3 flex flex-col gap-2">' +
        b.criterios.map(function (c) {
          var ic = c.ok ? STATUS.concluido.svg : STATUS.proximo.svg;
          return '<li class="flex items-start gap-3 text-[15px] leading-snug text-ink"><span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-borda bg-cartao text-ink">' + ic + '</span><span>' + esc(c.texto) + '</span></li>';
        }).join('') + '</ul></div>';
    }
    return h;
  }
  function corpoBloco(b, topo) {
    var ds = b.disciplinas || [];
    if (ds.some(function (d) { return d.porque || d.oQue; })) {
      return '<ul class="' + topo + ' flex flex-col gap-4">' + ds.map(function (d, i) { return cartaoDetalhe(d, i + 1); }).join('') + '</ul>' + extrasBloco(b);
    }
    return '<ul class="' + topo + ' grid grid-cols-1 gap-4 ' + (topo === 'mt-6' ? 'grid-cols-2' : 'md:grid-cols-2') + '">' + ds.map(cartaoDisciplina).join('') + '</ul>';
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
          '<div><p class="t-label text-sec">Bloco ' + pad(i + 1) + (b.periodo ? ' · ' + esc(b.periodo) : '') + '</p>' +
          '<h3 class="t-h3 mt-2 font-serif font-semibold">' + esc(b.bloco) + '</h3></div>' +
          '<p class="text-sm text-sec"><strong class="font-serif text-3xl font-medium text-ink">' + c.concluido + '</strong>/' + c.total + ' concluídas</p>' +
        '</div>' +
        (b.objetivo ? '<p class="mt-4 max-w-xl text-[15px] leading-relaxed text-leitura">' + esc(b.objetivo) + '</p>' : '') +
        corpoBloco(b, 'mt-6') + '</div>';
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
          (b.objetivo ? '<p class="mb-4 text-[15px] leading-relaxed text-leitura">' + esc(b.objetivo) + '</p>' : '') +
          corpoBloco(b, 'mt-0') + '</div></div>';
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
     5. ANIMAÇÕES DE ENTRADA (fade + leve subida)
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
     6. FOTO: mostra a imagem se existir; senão, mantém o placeholder
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
  iniciarAnimacoes();
  iniciarFoto();
  var ano = $('#ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
