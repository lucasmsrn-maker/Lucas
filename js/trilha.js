/* =====================================================================
   TRILHA DE ESTUDOS — este é o único arquivo que você precisa editar
   para manter a página atualizada.
   =====================================================================

   COMO ATUALIZAR

   1. A trilha tem 5 blocos. Cada bloco tem um nome ("bloco") e uma
      lista de disciplinas ("disciplinas").

   2. Em cada disciplina, altere só o texto entre aspas:
      - nome:        o nome da disciplina.
      - status:      use exatamente um destes três valores:
                       "concluido"  → já terminei
                       "andamento"  → estou estudando agora
                       "proximo"    → ainda vou começar
      - aprendizado: uma frase curta sobre o que aprendi.
                     Em disciplinas "proximo", pode deixar vazio: ""

   3. Salve o arquivo e recarregue a página. A barra de progresso, os
      contadores (como "7/20") e os selos se atualizam sozinhos.

   DICAS
   - Não apague aspas, vírgulas, chaves { } nem colchetes [ ].
   - Para incluir uma disciplina, copie uma linha inteira { ... },
     cole logo abaixo e edite. O total de disciplinas é recalculado.
   - Os nomes dos blocos também alimentam a faixa animada do topo.

   CAMPOS EXTRAS (opcionais) — usados no Bloco 1 para dar mais detalhe
   Em um bloco:   periodo, objetivo, entregavel { rotulo, titulo, texto,
                  passos [...] }, criterios [ { texto, ok: true/false } ]
   Em disciplina: num, oQue, porque (e porqueRotulo para trocar o título
                  da caixa), referencias [...], naGupy
   Se o bloco tiver "oQue" ou "porque", ele aparece no formato detalhado.
   Sem esses campos, aparece o cartão simples (nome, status, aprendizado).
   Quando cumprir um critério, troque ok: false por ok: true.
   ===================================================================== */

const trilha = [
  {
    bloco: "Fundamentos de UX",
    periodo: "Fase 1 · Meses 1–2",
    objetivo: "Parar de dizer “ficou melhor assim”. Sair com o vocabulário para nomear problemas de interface e justificar cada decisão de design.",
    disciplinas: [
      { num: 1, nome: "Fundamentos de UX e design de interação", status: "concluido",
        oQue: "Affordance, feedback, modelo mental e custo de interação.",
        porque: "Sem esse vocabulário não dá para justificar uma decisão — só dizer que “ficou melhor assim”, que é o que impede a promoção de designer júnior.",
        aprendizado: "Aprendi a nomear o que acontece em uma interface: affordance, feedback, modelo mental e custo de interação. Agora consigo explicar por que uma tela confunde, em vez de dizer só que “não ficou bom”.",
        referencias: ["Livro · Don Norman, O Design do Dia a Dia", "Livro · Steve Krug, Não me faça pensar", "Site · Laws of UX", "Site · Nielsen Norman Group"],
        naGupy: "" },
      { num: 2, nome: "Psicologia cognitiva e heurísticas de usabilidade", status: "concluido",
        oQue: "As 10 heurísticas de Nielsen, carga cognitiva, lei de Hick, lei de Fitts e viés de ancoragem.",
        porque: "É o instrumento que transforma “essa tela é ruim” em um laudo com dez itens nomeados e priorizados.",
        aprendizado: "Aprendi as 10 heurísticas de Nielsen e princípios como carga cognitiva, lei de Hick e lei de Fitts. Com eles, “essa tela é ruim” vira um laudo com problemas nomeados e priorizados por severidade.",
        referencias: ["Essencial · 10 Usability Heuristics (NN/g)", "Livro · Susan Weinschenk, 100 Things Every Designer Needs to Know About People", "Estudo · Growth.Design case studies"],
        naGupy: "Avaliação heurística da tela do produto que mais atendo no suporte. É o Projeto 01." },
      { num: 3, nome: "Arquitetura de informação", status: "concluido",
        oQue: "Como nomear, agrupar e hierarquizar: menu, taxonomia, navegação e findability.",
        porque: "Boa parte dos tickets de “não acho onde configura” é problema de arquitetura de informação, não de interface — e é a categoria de problema que designer júnior não reconhece.",
        aprendizado: "Aprendi a nomear, agrupar e hierarquizar informação, e a testar isso com card sorting e tree testing. Entendi que muito “não acho onde configura” é problema de arquitetura de informação, não de visual.",
        referencias: ["Livro · Rosenfeld, Morville & Arango, Information Architecture", "Método · Optimal Workshop (card sorting e tree testing)", "Artigo · IA vs. navegação (NN/g)"],
        naGupy: "" },
      { num: 4, nome: "Negócio, produto e o domínio de RH", status: "concluido",
        oQue: "SaaS B2B, multi-tenant, ciclo de vida do cliente e churn. Em RH tech, quem compra (RH) não é quem mais usa (gestor, candidato, colaborador).",
        porqueRotulo: "Minha vantagem",
        porque: "Já vivo quase tudo isso no suporte. Falta amarrar no vocabulário de produto.",
        aprendizado: "Aprendi como times de produto funcionam e como um SaaS B2B se organiza: vários clientes na mesma plataforma, ciclo de vida do cliente e churn. Em RH tech, quem compra não é quem mais usa, e isso muda quem precisa ser ouvido no design.",
        referencias: ["Livro · Marty Cagan, Inspirado", "Livro · Melissa Perri, Escaping the Build Trap", "Grátis · Shape Up (Basecamp)", "Artigo · 8 Tips to Design a SaaS Product"],
        naGupy: "Leitura da Jornada Gupier inteira no GupyHub — da pré-contratação ao offboarding. É o desenho do domínio que os produtos atendem, e eu vivo cada etapa por dentro." },
    ],
    entregavel: {
      rotulo: "Entregável do bloco · Projeto 01",
      titulo: "Avaliação heurística da tela que mais atendo",
      texto: "Um laudo escrito de 10 itens, com severidade e recomendação, sobre a tela do produto que mais gera ticket na minha fila.",
      passos: [
        "Levantar o volume: quantos tickets a tela gerou no último trimestre e por qual motivo",
        "Percorrer a tela contra as 10 heurísticas de Nielsen, uma a uma",
        "Classificar cada achado por severidade (bloqueia, atrasa ou incomoda) e frequência",
        "Propor wireframe de baixa fidelidade para os três achados mais graves",
        "Pedir 30 minutos de um designer do time para criticar o laudo",
      ],
    },
    criterios: [
      { texto: "Consigo nomear 8 das 10 heurísticas sem consultar", ok: false },
      { texto: "Projeto 01 escrito e revisado por um designer do time", ok: false },
    ],
  },
  {
    bloco: "Pesquisa e descoberta",
    disciplinas: [
      { nome: "[preencher] Disciplina 2.1", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 2.2", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 2.3", status: "andamento", aprendizado: "[preencher] O que estou aprendendo agora." },
      { nome: "[preencher] Disciplina 2.4", status: "proximo", aprendizado: "" },
    ],
  },
  {
    bloco: "Execução visual",
    disciplinas: [
      { nome: "[preencher] Disciplina 3.1", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 3.2", status: "andamento", aprendizado: "[preencher] O que estou aprendendo agora." },
      { nome: "[preencher] Disciplina 3.3", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 3.4", status: "proximo", aprendizado: "" },
    ],
  },
  {
    bloco: "Validação e entrega",
    disciplinas: [
      { nome: "[preencher] Disciplina 4.1", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 4.2", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 4.3", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 4.4", status: "proximo", aprendizado: "" },
    ],
  },
  {
    bloco: "Carreira em design",
    disciplinas: [
      { nome: "[preencher] Disciplina 5.1", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 5.2", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 5.3", status: "proximo", aprendizado: "" },
      { nome: "[preencher] Disciplina 5.4", status: "proximo", aprendizado: "" },
    ],
  },
];
