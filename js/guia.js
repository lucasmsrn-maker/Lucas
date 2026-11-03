/* =====================================================================
   GUIA COMPLETO "DO SUPORTE AO PRODUCT DESIGN"
   Conteúdo do PDF, exibido dentro do bloco "Fundamentos de UX".

   COMO EDITAR
   - Cada seção tem "num", "titulo" e uma lista de "itens".
   - Cada item tem um tipo "t": p (parágrafo), h (subtítulo), tabela,
     destaque, lista, colunas, linhas, disc (disciplina), fase, projeto,
     tituladas, checklist e nota.
   - Altere só os textos entre aspas. Não apague vírgulas, chaves { }
     nem colchetes [ ].
   - Nos itens "checklist" e "criterios", troque ok: false por ok: true
     quando cumprir.
   ===================================================================== */

const guia = {
  bloco: "Fundamentos de UX",
  rotulo: "Plano de transição de carreira · Gupy",
  titulo: "Do Suporte ao Product Design",
  intro: "Guia de estudos: 20 disciplinas, uma trilha de seis meses, três projetos de portfólio construídos com o contexto real da Gupy — e a mecânica interna para a movimentação acontecer.",
  resumo: [
    ["Duração", "6 meses"],
    ["Dedicação", "6–8h/semana"],
    ["Disciplinas", "20"],
    ["Fases", "5"],
    ["Entregáveis", "3 cases"],
  ],
  secoes: [
    /* ---------------------------------------------------------------- 01 */
    {
      num: "01", titulo: "O que já trago do suporte",
      itens: [
        { t: "p", texto: "Quem vem de suporte não começa do zero em design — começa do meio. Você passou meses no lugar onde o produto encosta na realidade: a exceção, o dado sujo, o caminho que ninguém desenhou. É exatamente o material que falta na maioria dos processos de design." },
        { t: "p", texto: "Antes de estudar qualquer coisa, reconheça o que já é ativo. Isso muda como você estuda: você não precisa imaginar o usuário, você já falou com ele." },
        { t: "tabela", cab: ["O que você faz hoje", "Como isso se chama em design", "Onde entra na trilha"], linhas: [
          ["Atender ticket e entender a dor por trás do pedido", "Entrevista de usuário e escuta de problema — o pedido nunca é o problema", "Disciplina 05, Fase 2"],
          ["Ver o mesmo problema 40 vezes no mês", "Análise de tickets: a fonte de pesquisa mais barata que existe", "Disciplina 07, Projeto 02"],
          ["Conhecer as exceções: dado legado, permissão estranha, empresa com 8 mil candidatos", "Edge cases — é literalmente o conteúdo de uma UX Spec", "Disciplina 15, Fase 4"],
          ["Explicar o produto para quem não entende", "UX Writing e clareza de interface", "Disciplina 12"],
          ["Falar de RH: vaga, triagem, admissão, clima, ciclo de performance", "Domain knowledge — a barreira de entrada real em produto B2B", "Disciplina 04"],
          ["Priorizar fila por gravidade e volume", "Severidade e priorização (impacto × esforço)", "Disciplina 07, 14"],
        ] },
        { t: "destaque", tom: "ancora", rotulo: "Use isso como âncora", texto: "Um designer sênior contratado de fora leva de 6 a 12 meses para saber o que você sabe sobre como o produto quebra. Sua desvantagem é craft e método — as duas coisas que se estudam. Ancore cada estudo em um caso que você já atendeu: teoria em cima de caso real fixa; teoria solta evapora." },
        { t: "destaque", tom: "armadilha", rotulo: "A armadilha de quem vem do suporte", texto: "Você vai querer resolver o ticket. Design de produto pergunta antes se aquele ticket é sintoma de um problema que vale resolver para todos os clientes — e às vezes a resposta é não. Cuidado com o viés de amostra: quem abre ticket é uma fatia específica da base, e não a base." },
      ],
    },

    /* ---------------------------------------------------------------- 02 */
    {
      num: "02", titulo: "As 20 disciplinas",
      itens: [
        { t: "p", texto: "Cinco blocos. Não são cinco etapas em sequência — são cinco camadas que você vai revisitar a vida inteira. A ordem de estudo está na trilha da seção 03; aqui está o mapa completo do território, com as referências de cada terreno." },
        { t: "p", texto: "Bloco A · Fundamentos: o vocabulário (4 disciplinas) — veja os quatro cartões no início deste bloco, que já trazem referências e aplicação na Gupy." },

        { t: "h", texto: "Bloco B · Pesquisa e discovery (3 disciplinas)" },
        { t: "disc", num: 5, nome: "Pesquisa qualitativa",
          texto: "Entrevista em profundidade, shadowing, diário de uso, Jobs to be Done.",
          chave: ["A regra que custa mais caro aprender:", "nunca pergunte “você usaria X?”. Pergunta hipotética gera resposta educada, não evidência. Pergunte sobre comportamento passado."],
          refs: ["Livro · Steve Portigal, Entrevistando Usuários — o manual da técnica", "Livro · Erika Hall, Just Enough Research — pesquisa em time pequeno, sem cerimônia", "Livro · Teresa Torres, Continuous Discovery Habits + Product Talk", "Prática · Shadowing: acompanhe um recrutador usando o ATS por um turno inteiro"],
          gupy: "Peça à Amanda o template de roteiro de entrevista da skill design-produto — e anonimize toda transcrição antes de processar (Política de Privacy by Design / LGPD)." },
        { t: "disc", num: 6, nome: "Pesquisa quantitativa e analytics de produto",
          texto: "Funil, coorte, retenção, survey, NPS/CSAT, session replay.",
          chave: ["Regra de ouro:", "o dado quantitativo diz onde o problema está; a entrevista diz por quê. Triangule sempre — uma fonte de cada tipo."],
          refs: ["Curso · Amplitude Academy — gratuito, ensina análise de produto de verdade", "Ferramenta · Microsoft Clarity — heatmap e replay grátis, bom para treinar o olho", "Livro · Cole Nussbaumer Knaflic, Storytelling com Dados", "Conceito · Framework HEART (Google) e North Star Metric"],
          gupy: "" },
        { t: "disc", num: 7, nome: "Síntese e priorização",
          texto: "Matriz CSD, affinity mapping, mapa de jornada, personas/arquétipos, matriz impacto × esforço, RICE.",
          chave: ["Onde quase todo mundo falha:", "dado bruto sem síntese não gera decisão. E “usuário disse X” não é a mesma coisa que “usuário precisa de Y”."],
          refs: ["Ferramenta · FigJam ou Miro para affinity mapping; Dovetail como repositório de pesquisa", "Método · Matriz CSD (Certezas, Suposições, Dúvidas) para abrir qualquer projeto", "Livro · Jake Knapp, Sprint — síntese e decisão em cinco dias"],
          gupy: "A skill interna design-produto tem templates prontos de Matriz CSD e de Síntese de Discovery. Use-os em vez de inventar formato." },

        { t: "h", texto: "Bloco C · Craft: o ofício (6 disciplinas)" },
        { t: "disc", num: 8, nome: "Design visual e UI",
          texto: "Grid, escala tipográfica, cor, contraste, espaçamento, hierarquia, densidade.",
          chave: ["Notícia boa:", "isso é o que mais rápido melhora com prática deliberada — e o que mais rápido delata um portfólio fraco. É treino de olho, não de talento."],
          refs: ["Livro · Refactoring UI — Wathan & Schoger. O melhor investimento de UI da lista", "Livro · Practical UI — Adham Dannaway, regras acionáveis", "Curso BR · Origamid — UI e front-end, didática excelente em português", "Ferramenta · Type Scale e Google Fonts Knowledge"],
          gupy: "" },
        { t: "disc", num: 9, nome: "Figma",
          texto: "Auto layout, constraints, componentes, variants, properties, variables, bibliotecas, Dev Mode.",
          chave: ["Meta de proficiência:", "montar um fluxo de 8 telas com componentes reais em uma tarde, sem lutar contra a ferramenta."],
          refs: ["Oficial · Figma Learn e Resource Library — gratuitos e atualizados", "Vídeo · Canal do Figma — palestras da Config, técnicas avançadas", "Prática · Refaça uma tela real do produto do zero, só com auto layout. Depois refaça sem olhar"],
          gupy: "Peça acesso à biblioteca do design system no Figma antes de começar a praticar — treinar com os componentes reais vale três vezes mais que treinar com retângulos." },
        { t: "disc", num: 10, nome: "Design system e tokens",
          texto: "Componente, variante, token, tema, densidade, governança da biblioteca.",
          chave: ["A disciplina que separa design de produto de design de tela:", "se o componente não atende, você evolui o componente na biblioteca — não faz gambiarra local com detach."],
          refs: ["Livro · Alla Kholmatova, Design Systems", "Estudo · Material 3, Atlassian, Polaris, Carbon, Primer — leia a documentação, não só olhe os componentes", "Ferramenta · Storybook e Tokens Studio"],
          gupy: "O kit interno de prototipagem já traz as regras da marca: Inter sempre, botão e tab em pill (border-radius: 50em), fundo de página #F3F4F7, azul de marca #003CFD, espaçamento sempre múltiplo de 4px." },
        { t: "disc", num: 11, nome: "Prototipagem por fidelidade",
          texto: "Rabisco, wireframe, fluxo, média, alta, interativo, protótipo em código.",
          chave: ["A regra que economiza semanas:", "a fidelidade certa é a mínima que responde à pergunta do momento. Dúvida sobre o quê construir → baixa. Sobre como funciona → média. Sobre acabamento → alta."],
          refs: ["Prática · Crazy 8s: 8 ideias em 8 minutos, no papel. Faça toda semana", "Ferramenta · Figma (variables e conditionals), Whimsical para fluxo", "Artigo · AI in Design Report 2026 — Craft: 43% dos times já esperam protótipo funcional como entregável padrão"],
          gupy: "A skill prototipagem-gupy gera uma tela com a cara real do produto sem exigir código. Ótimo atalho para comunicar ideia — mas é aproximação visual, não componente de produção." },
        { t: "disc", num: 12, nome: "UX writing e conteúdo",
          texto: "Microcopy, mensagem de erro, empty state, rótulo, nomenclatura, voz e tom.",
          chave: ["Vantagem direta do suporte:", "você sabe exatamente quais palavras da interface geram ticket. Isso é ouro e quase ninguém tem."],
          refs: ["Livro · Torrey Podmajersky, Strategic Writing for UX", "Site · NN/g — Writing for the Web", "Prática · Reescreva as 10 mensagens de erro que mais geram ticket. Regra: o que deu errado + como resolver, sem pedir desculpas"],
          gupy: "" },
        { t: "disc", num: 13, nome: "Acessibilidade",
          texto: "WCAG 2.2 A/AA, contraste, navegação por teclado, ordem de foco, leitor de tela, HTML semântico, alvo de toque.",
          chave: ["Não é etapa final:", "entra desde a prototipagem. E em produto de RH tem peso extra — a plataforma é a porta de entrada de emprego de gente com deficiência."],
          refs: ["Norma · WCAG 2.2 Quick Reference e W3C WAI Tutorials", "Brasil · eMAG 3.1 e gov.br Design System", "Ferramenta · WebAIM Contrast Checker, Stark (plugin Figma)"],
          gupy: "A skill revisao-acessibilidade audita tela, protótipo, componente ou código contra eMAG 3.1, WCAG 2.2 AA e gov.br DS, e devolve o relatório com criticidade. Rode nos seus próprios estudos desde o começo." },

        { t: "h", texto: "Bloco D · Validação e entrega (3 disciplinas)" },
        { t: "disc", num: 14, nome: "Testes e validações",
          texto: "Teste de usabilidade moderado e não moderado, teste de 5 segundos, A/B, card sorting, tree testing, teste de preferência, fake door.",
          chave: ["Disciplina mestra:", "critério de sucesso definido antes de rodar. “80% completam a tarefa sem ajuda” é critério; “ver como se saem” não é."],
          refs: ["Livro · Steve Krug, Rocket Surgery Made Easy — teste de usabilidade caseiro, do jeito certo", "Essencial · Por que 5 usuários bastam — Nielsen", "Ferramenta · Maze Guides, Optimal Workshop, Lyssna", "Prática · Modere 5 sessões. Silêncio é dado — não socorra o participante"],
          gupy: "Peça para assistir a uma sessão de teste do time de design antes de moderar a sua. Depois use os templates de Plano de Teste e Relatório de Teste da skill design-produto." },
        { t: "disc", num: 15, nome: "Handoff e UX Spec",
          texto: "Todos os estados (default, hover, focus, disabled, loading, vazio, erro, 0/1/1000 itens), responsivo, tokens, interações anotadas, e a spec no formato “quando X, então Y”.",
          chave: ["Sua especialidade natural:", "spec é documentação de exceção, e exceção é o que você conhece melhor que todo mundo."],
          refs: ["Ferramenta · Figma Dev Mode", "Artigo · Design Handoff em 2026: MCP e Code Connect", "Formato · “Ao clicar em Salvar com campo obrigatório vazio → campo recebe borda de erro, mensagem X, foco vai para o primeiro campo inválido”", "Prática · Escreva a spec junto com a UI final, nunca depois — documentar comportamento expõe buraco de design a tempo"],
          gupy: "Templates de Checklist de Handoff e de UX Spec estão na skill design-produto. Revise sua primeira spec com um dev e um QA antes de dar por pronta." },
        { t: "disc", num: 16, nome: "Colaboração com engenharia",
          texto: "HTML semântico, CSS (flex, grid, breakpoint), o que é componente, estado, API, latência, feature flag.",
          chave: ["Não é para virar dev:", "é para saber o custo do que você desenha e negociar com argumento em vez de esperança."],
          refs: ["Base · MDN Learn e web.dev Learn", "Curso BR · Origamid — HTML/CSS na medida do designer", "Prática · Acompanhe uma refinement e uma review do time. Pergunte “quanto custa isso?” em toda proposta sua"],
          gupy: "" },

        { t: "h", texto: "Bloco E · Ofício e carreira (4 disciplinas)" },
        { t: "disc", num: 17, nome: "Métricas e definição de sucesso",
          texto: "Formular hipótese (“acreditamos que X, saberemos que é verdade quando Y”), instrumentar evento, definir métrica de sucesso antes de desenhar.",
          chave: ["Sem isso,", "design vira gosto — e gosto perde toda discussão com quem tem número."],
          refs: ["Curso · Amplitude Academy", "Livro · Croll & Yoskovitz, Lean Analytics", "Prática · Para toda tela que desenhar, escreva a métrica que provaria que funcionou"],
          gupy: "" },
        { t: "disc", num: 18, nome: "Comunicação e defesa de decisão",
          texto: "Apresentar trabalho, receber crítica, defender escolha com evidência, dizer não com dado.",
          chave: ["É a disciplina mais subestimada:", "designers não são promovidos por desenhar melhor, e sim por decidir e explicar melhor."],
          refs: ["Livro · Tom Greever, Articulating Design Decisions — leia duas vezes", "Prática · Entre no ritual de design crit do time como ouvinte no mês 1; apresente algo seu no mês 3", "Formato · Toda apresentação: problema → evidência → alternativas consideradas → decisão → como vamos medir"],
          gupy: "Use as 1:1s com sua liderança para treinar isso. E as técnicas SCI (Situação, Comportamento, Impacto) e CPC (Começar, Parar, Continuar) do guia interno de feedback para pedir crítica de forma acionável." },
        { t: "disc", num: 19, nome: "IA no processo de design",
          texto: "Síntese de pesquisa em escala, protótipo em código, rascunho de spec, design QA assistido.",
          chave: ["Princípio único:", "o modelo escreve o primeiro rascunho; os humanos concordam com a segunda versão. Citação de fonte obrigatória e revisão humana antes de qualquer uso."],
          refs: ["Relatório · AI in Design Report 2026 — maturidade por etapa, com casos nomeados", "Limite · Synthetic Users — NN/g: usuário sintético serve para pilotar roteiro, nunca como evidência", "Playbook · Agentic AI Product Team Playbook"],
          gupy: "Trilha Talks IA na Gupy Treinamento (9 talks, com certificado), o guia de Engenharia de Prompt no GupyHub (Papel · Ação · Contexto · Intenção · Formato) e a Política de Uso de IA Generativa. Só conta corporativa — conta pessoal ou gratuita é proibida para dado de trabalho." },
        { t: "disc", num: 20, nome: "Portfólio e case study",
          texto: "Três casos bem escritos valem mais que trinta telas bonitas.",
          chave: ["Estrutura de um case:", "contexto e restrição → problema com evidência → o que você considerou e descartou → decisão → resultado medido → o que você faria diferente."],
          refs: ["Guia · Portfólio de UX — NN/g", "Leitura · UX Collective BR — cases e ensaios em português", "Regra · Processo > pixel. Recrutador de design lê o raciocínio, não admira o gradiente"],
          gupy: "Antes de publicar qualquer case com dado de cliente, tela de produto ou fala de usuário: anonimize e valide com a liderança. Dado de candidato e de recrutador é dado pessoal sob LGPD." },
      ],
    },

    /* ---------------------------------------------------------------- 03 */
    {
      num: "03", titulo: "Trilha de 6 meses",
      itens: [
        { t: "p", texto: "Cinco fases em sequência real: cada uma depende do que a anterior deixou pronto. O plano assume 6 a 8 horas por semana conciliadas com o trabalho no suporte. Com 3–4h/semana, estique para 10–12 meses mantendo a ordem; com dedicação integral, comprima para 3, mas não pule a Fase 2 — pesquisa é o que mais diferencia designer de produto de desenhista de tela." },
        { t: "fase", num: "01", periodo: "Mês 1–2", area: "Fundamentos e ferramenta",
          titulo: "Vocabulário e domínio do Figma",
          objetivo: "Parar de dizer “ficou melhor assim”. Sair com vocabulário para nomear problema e com fluência suficiente no Figma para não lutar contra a ferramenta.",
          estudar: ["Disciplinas 01, 02, 09", "Não me faça pensar (semana 1)", "10 heurísticas de Nielsen", "Figma Learn, do começo ao fim"],
          praticar: ["Refazer 1 tela real por semana, só com auto layout", "Crazy 8s toda segunda", "1 artigo NN/g por dia"],
          conectar: ["Entrar no design crit como ouvinte", "Pedir acesso à biblioteca do DS no Figma", "Abrir o tema com a liderança na 1:1"],
          entregavel: "Avaliação heurística escrita da tela que mais atendo no suporte — 10 itens, com severidade e recomendação. Esse é o Projeto 01.",
          criterios: [
            { texto: "Consigo nomear 8 das 10 heurísticas sem consultar", ok: false },
            { texto: "Monto um fluxo de 8 telas com componentes em uma tarde", ok: false },
            { texto: "Projeto 01 escrito e revisado por um designer do time", ok: false },
          ] },
        { t: "fase", num: "02", periodo: "Mês 3", area: "Pesquisa e discovery",
          titulo: "Transformar ticket em evidência",
          objetivo: "Aprender a descobrir qual problema vale resolver. É a fase em que a origem no suporte rende mais — tenho acesso à matéria-prima que designer de fora não tem.",
          estudar: ["Disciplinas 05, 06, 07", "Entrevistando Usuários, Portigal", "Just Enough Research", "Amplitude Academy (básico)"],
          praticar: ["Top 10 temas de ticket do trimestre", "5 entrevistas de 45 min", "Affinity mapping no FigJam", "1 shadowing de turno inteiro"],
          conectar: ["Assistir a uma sessão de pesquisa do time", "Pedir revisão do roteiro antes da 1ª entrevista", "Rodar piloto com um colega"],
          entregavel: "Síntese de discovery: achados com citação de fonte, oportunidades priorizadas e hipótese formulada no formato “acreditamos que X, saberemos que é verdade quando Y”. Esse é o Projeto 02.",
          criterios: [
            { texto: "Conduzi 5 entrevistas sem fazer pergunta hipotética", ok: false },
            { texto: "Separei fato de interpretação na síntese", ok: false },
            { texto: "Triangulei uma fonte qualitativa com uma quantitativa", ok: false },
            { texto: "Anonimizei todas as transcrições antes de processar", ok: false },
          ] },
        { t: "fase", num: "03", periodo: "Mês 4", area: "Craft e sistema",
          titulo: "Interface que sustenta escrutínio",
          objetivo: "Passar de “sei usar Figma” para “sei desenhar”. Treino de olho, densidade e uso disciplinado do design system.",
          estudar: ["Disciplinas 03, 08, 10, 11, 12, 13", "Refactoring UI, capítulo por semana", "Documentação de 2 DS grandes", "WCAG 2.2 AA (quick ref)"],
          praticar: ["Do wireframe à alta fidelidade, só com componentes do DS", "Card sorting do menu de um produto", "Reescrever 10 mensagens de erro", "Rodar auditoria de acessibilidade nas minhas telas"],
          conectar: ["Apresentar exploração no design crit", "Pedir revisão técnica a um dev na alta fidelidade", "Propor evolução de 1 componente na biblioteca"],
          entregavel: "Fluxo completo em alta fidelidade da oportunidade priorizada na Fase 2 — três direções divergentes exploradas em baixa fidelidade antes de refinar uma, todos os estados desenhados, contraste AA validado.",
          criterios: [
            { texto: "Explorei 3 direções antes de refinar uma", ok: false },
            { texto: "Usei só tokens e componentes do DS, sem detach", ok: false },
            { texto: "Textos e dados reais, zero lorem ipsum", ok: false },
            { texto: "Contraste AA validado em todas as telas", ok: false },
          ] },
        { t: "fase", num: "04", periodo: "Mês 5", area: "Validação e entrega",
          titulo: "Fechar o ciclo até a engenharia",
          objetivo: "Provar que funciona e entregar de um jeito que dev construa sem adivinhar. É a fase que fecha o loop e transforma exercício em trabalho de designer.",
          estudar: ["Disciplinas 14, 15, 16, 17", "Rocket Surgery Made Easy", "Articulating Design Decisions", "Figma Dev Mode"],
          praticar: ["Teste com 5 usuários, com critério de sucesso definido antes", "Iterar e rodar a 2ª rodada", "Escrever a UX Spec em “quando X, então Y”", "Sessão de handoff de 30 min"],
          conectar: ["Revisar a spec com um dev e um QA", "Acompanhar uma refinement", "Fazer design QA em staging"],
          entregavel: "Relatório de teste (resultado por critério, problemas com severidade, recomendação) + UX Spec revisada + handoff feito em conversa. Esse é o Projeto 03.",
          criterios: [
            { texto: "Defini critério de sucesso antes de rodar o teste", ok: false },
            { texto: "Testei caminho de erro e recuperação, não só o caminho feliz", ok: false },
            { texto: "Spec cobre estados vazio, erro, 0/1/1000 itens e sessão expirada", ok: false },
            { texto: "Um dev leu a spec e conseguiu estimar sem me perguntar nada", ok: false },
          ] },
        { t: "fase", num: "05", periodo: "Mês 6", area: "Portfólio e candidatura",
          titulo: "Escrever o argumento",
          objetivo: "Transformar os três projetos em cases que sustentem uma conversa de 45 minutos, e entrar formalmente no processo de movimentação interna.",
          estudar: ["Disciplinas 18, 19, 20", "Guia de portfólio da NN/g", "Cases do UX Collective BR", "Trilha Talks IA"],
          praticar: ["Escrever 3 cases: contexto → problema → alternativas → decisão → resultado", "Apresentar para 2 designers e iterar", "Simular entrevista de portfólio"],
          conectar: ["Alinhar com a liderança atual e com a de design", "Checar requisitos de recrutamento interno", "Combinar a passagem de bastão"],
          entregavel: "Portfólio com 3 cases, aprovado para publicação (anonimizado), e candidatura formalizada com a liderança atual como indicante.",
          criterios: [
            { texto: "Cada case mostra o que descartei e por quê", ok: false },
            { texto: "Apresentei os 3 cases e absorvi crítica sem defender por reflexo", ok: false },
            { texto: "Conteúdo revisado quanto a LGPD e aprovado pela liderança", ok: false },
            { texto: "Candidatura enviada com e-mail corporativo e indicante correto", ok: false },
          ] },
      ],
    },

    /* ---------------------------------------------------------------- 04 */
    {
      num: "04", titulo: "Os três projetos",
      itens: [
        { t: "p", texto: "Os projetos não são exercícios paralelos ao estudo — são o estudo. Cada um nasce dentro de uma fase, usa o contexto real da Gupy e termina como um case de portfólio. Um encadeia no outro: o Projeto 02 investiga o problema que o 01 farejou, e o 03 valida e entrega a solução que o 02 priorizou." },
        { t: "destaque", tom: "acao", rotulo: "Regra que atravessa os três", texto: "Anonimize antes de processar e valide antes de publicar. Nome, e-mail, empresa e qualquer identificador de candidato ou recrutador saem do material primeiro." },
        { t: "projeto", rotulo: "Projeto 01 · Fase 1 · Mês 2", titulo: "Avaliação heurística da tela que mais atendo",
          texto: "Escolha a tela do produto que gera mais ticket na sua fila. Você já sabe o que dói nela; agora aprenda a descrever isso no vocabulário da área. É o projeto de menor risco e maior retorno para começar.",
          passos: [
            "Levante o volume: quantos tickets essa tela gerou no último trimestre e por qual motivo",
            "Percorra a tela contra as 10 heurísticas de Nielsen, uma a uma",
            "Classifique cada achado por severidade (bloqueia / atrasa / incomoda) e frequência",
            "Proponha wireframe de baixa fidelidade para os três achados mais graves",
            "Peça 30 minutos de um designer do time para criticar o laudo",
          ] },
        { t: "projeto", rotulo: "Projeto 02 · Fase 2 · Mês 3", titulo: "Discovery a partir da base de tickets",
          texto: "O projeto que só você poderia fazer. Ninguém tem acesso mais direto à dor registrada do que quem responde a ela todos os dias — e essa base quase nunca é lida como pesquisa.",
          passos: [
            "Categorize os tickets do trimestre e monte o top 10 de temas por volume e por esforço de atendimento",
            "Cruze com dado de produto: onde no funil o problema aparece",
            "Entreviste 5 usuários do tema nº 1 — inclua quem desistiu, não só quem reclamou",
            "Sintetize por affinity mapping, com cada afirmação citando a fonte (ID do ticket, linha da transcrição)",
            "Priorize as oportunidades por impacto × esforço e formule a hipótese que a Fase 3 vai desenhar",
          ] },
        { t: "projeto", rotulo: "Projeto 03 · Fases 3–4 · Mês 4–5", titulo: "Fluxo ponta a ponta, validado e entregue",
          texto: "O case que prova que você é designer de produto e não apenas alguém com boas ideias sobre o produto: solução desenhada, testada com gente de verdade, iterada e entregue em condição de ser construída.",
          passos: [
            "Três direções divergentes em baixa fidelidade para a oportunidade priorizada",
            "Média fidelidade da direção escolhida, com dados e textos reais, incluindo estados de erro e vazio",
            "Teste com 5 usuários e critério de sucesso definido antes; iterar; segunda rodada com 5",
            "Alta fidelidade com componentes e tokens do design system, contraste AA validado",
            "UX Spec em “quando X, então Y”, revisada com um dev e um QA",
            "Sessão de handoff de 30 minutos, gravada — e design QA em staging se a solução for construída",
          ] },
      ],
    },

    /* ---------------------------------------------------------------- 05 */
    {
      num: "05", titulo: "Biblioteca externa",
      itens: [
        { t: "p", texto: "Não compre tudo de uma vez. A coluna da esquerda diz em qual fase cada item entra — comprar sete livros no mês 1 é a forma mais comum de não ler nenhum." },
        { t: "linhas", titulo: "Livros — os seis que fazem diferença", linhas: [
          ["Fase 1", "Não me faça pensar — Steve Krug. Curto, prático, muda como você olha uma tela. Comece por ele."],
          ["Fase 1", "O Design do Dia a Dia — Don Norman. A base conceitual de tudo. Leia devagar, ao longo de dois meses."],
          ["Fase 2", "Entrevistando Usuários — Steve Portigal. A técnica de entrevista, do recrutamento à síntese."],
          ["Fase 3", "Refactoring UI — Wathan & Schoger. O maior salto de qualidade visual por hora investida."],
          ["Fase 4", "Rocket Surgery Made Easy — Steve Krug. Teste de usabilidade sem laboratório e sem desculpa."],
          ["Fase 5", "Articulating Design Decisions — Tom Greever. Como defender trabalho e sobreviver a stakeholder."],
        ] },
        { t: "linhas", titulo: "Livros complementares", linhas: [
          ["Pesquisa", "Just Enough Research — Erika Hall · Continuous Discovery Habits — Teresa Torres"],
          ["Produto", "Inspirado — Marty Cagan · Escaping the Build Trap — Melissa Perri · User Story Mapping — Jeff Patton"],
          ["Craft", "Design Systems — Alla Kholmatova · Practical UI — Adham Dannaway · Information Architecture — Rosenfeld, Morville & Arango"],
          ["Escrita", "Strategic Writing for UX — Torrey Podmajersky · Storytelling com Dados — Cole Nussbaumer Knaflic"],
          ["Processo", "Sprint — Jake Knapp · 100 Things Every Designer Needs to Know About People — Susan Weinschenk"],
        ] },
        { t: "linhas", titulo: "Leitura contínua — assine e acompanhe", linhas: [
          ["Enciclopédia", "Nielsen Norman Group — a fonte mais confiável da área. Um artigo por dia."],
          ["Princípios", "Laws of UX — disponível em português"],
          ["Brasil", "UX Collective BR — cases e ensaios em português"],
          ["Cases", "Growth.Design — psicologia aplicada tela por tela · Baymard Institute — pesquisa de e-commerce com rigor raro"],
          ["Técnico", "Smashing Magazine — a ponte entre design e front-end"],
          ["Produto", "Lenny's Newsletter · SVPG · Product Talk"],
        ] },
        { t: "linhas", titulo: "Cursos", linhas: [
          ["Grátis", "Figma Learn — oficial, atualizado, suficiente para dominar a ferramenta"],
          ["Grátis", "Amplitude Academy — análise de produto · W3C WAI Tutorials — acessibilidade"],
          ["Amplo", "Google UX Design Certificate (Coursera) — bom como panorama estruturado; não substitui projeto real"],
          ["Assinatura", "Interaction Design Foundation — biblioteca ampla, ritmo próprio"],
          ["Brasil", "Origamid (UI e front-end) · Aela · Chief of Design · Mergo (UX research) — confirme grade e preço atuais antes de contratar"],
          ["Vídeo", "NN/g · Figma / Config · AJ&Smart (design sprint)"],
        ] },
        { t: "linhas", titulo: "Sistemas e normas para estudar de perto", linhas: [
          ["Design system", "Material 3 · Atlassian · Polaris · Carbon · Primer — leia a documentação, é onde está o raciocínio"],
          ["Plataforma", "Apple HIG — a melhor referência de princípio de interação escrita"],
          ["Acessibilidade", "WCAG 2.2 · eMAG 3.1 · gov.br DS"],
          ["Ferramenta", "WebAIM Contrast · Type Scale · Clarity · Whimsical · Stark"],
          ["IA em design", "AI in Design Report 2026 · Synthetic Users (NN/g) · Figma AI Agents: uma avaliação honesta"],
        ] },
      ],
    },

    /* ---------------------------------------------------------------- 06 */
    {
      num: "06", titulo: "Materiais internos da Gupy",
      itens: [
        { t: "p", texto: "Esta é a metade do guia que nenhum curso oferece. Referência externa ensina método; material interno ensina o domínio — e é domínio que faz um designer ser útil em produto de RH no primeiro mês em vez de no sexto." },
        { t: "linhas", titulo: "Domínio de produto e de RH", linhas: [
          ["Central de ajuda", "suporte.gupy.io — mantida pelo time de suporte, é a fonte viva de how-to dos seis produtos: Recrutamento & Seleção, Admissão, Performance, Clima & Engajamento, Treinamento e Plataforma. Meu terreno. Reler como designer: onde o artigo é longo, o produto está confuso."],
          ["GupyHub", "A Jornada Gupier completa (pré-contratação, contratação, admissão, onboarding, desenvolvimento, engajamento, Gupy OS, offboarding). É o mapa do domínio que os produtos atendem — e eu o vivo por dentro."],
          ["Skill interna", "rh-persona-gupy — consultoria sênior de RH para quem não tem background na área. Serve para entender o “por quê” estratégico de qualquer feature de RH."],
          ["Glossário", "Dicionário Colaborativo (startupês e mundo Gupy) — para decifrar sigla e jargão em reunião de produto sem precisar perguntar."],
          ["Cultura", "Culture Code — os cinco valores. “Foco obsessivo no cliente” e “dono do problema” são exatamente o argumento da transição."],
        ] },
        { t: "nota", texto: "Fontes: base de conhecimento Gupy — “Produtos e plataforma Gupy”, “Jornada Gupier”, “Dicionário Colaborativo”, “Cultura e valores da Gupy” (GupyHub)." },
        { t: "linhas", titulo: "Método de design — a skill design-produto", linhas: [
          ["Referências", "Guias completos por etapa: Discovery, Testes e Validações, Prototipagem, Interface final e Handoff, UX Spec e IA no processo — cada um com métodos, ferramentas, boas práticas e erros comuns. É o currículo prático deste guia."],
          ["Templates", "Matriz CSD · Roteiro de entrevista · Síntese de discovery · Plano de teste · Relatório de teste · Plano de prototipagem · Checklist de handoff · Template de UX Spec · Plano de piloto de IA. Não inventar formato: usar o do time e ganhar tempo de revisão."],
          ["Skill", "prototipagem-gupy — gera tela com a cara real do produto (cor, tipografia, topbar/sidebar, densidade) sem exigir código. Aproximação visual, não componente de produção."],
          ["Skill", "revisao-acessibilidade — auditoria contra eMAG 3.1, WCAG 2.2 A/AA e gov.br DS, com relatório de criticidade. Rodar nos próprios estudos desde a Fase 1."],
        ] },
        { t: "linhas", titulo: "IA, ferramentas e as regras que valem aqui", linhas: [
          ["Trilha", "Talks IA — 9 talks na Gupy Treinamento, com certificado, atividades e Mentor IA."],
          ["GupyHub", "Engenharia de Prompt — o framework interno: Papel · Ação · Contexto · Intenção · Formato. Mais as 4 formas de usar IA (ter ideias, aprender, pensar, escrever) e o repositório de prompts."],
          ["Política", "Uso de IA generativa — só ferramenta e conta corporativa (Gemini, Claude). Conta pessoal ou gratuita é proibida para dado de trabalho. Ferramenta nova se pede via @plataforma no Slack, e passa por revisão de segurança antes do uso."],
          ["Política", "Privacy by Design e LGPD — dado de candidato e de recrutador é dado pessoal. Anonimize transcrição, gravação e export antes de qualquer processamento por IA: nome, e-mail, empresa e identificadores saem primeiro."],
        ] },
        { t: "nota", texto: "Fontes: base de conhecimento Gupy — “Talks IA”, “Engenharia de Prompt na Gupy”, “Política de uso de IA generativa na Gupy”, “Privacidade e Proteção de Dados na Gupy”. Incidente ou dúvida de segurança: #seguranca-escuta." },
        { t: "linhas", titulo: "Desenvolvimento e aprendizagem", linhas: [
          ["T&D", "GupyLab e Pílulas de Competências — trilhas internas de habilidade técnica e comportamental, na Educação Corporativa."],
          ["Método", "70:20:10 — 70% aprendizagem na prática, 20% com outras pessoas, 10% em treinamento formal. Este guia é desenhado nessa proporção: os três projetos são os 70%, o design crit e o shadowing são os 20%, os livros e cursos são os 10%."],
          ["Método", "G.R.O.W — estrutura do PDI orientada a resultado, com indicadores de evolução acompanhados na 1:1."],
          ["Feedback", "Técnicas SCI (Situação, Comportamento, Impacto) e CPC (Começar, Parar, Continuar) — para pedir crítica acionável sobre o trabalho de design, não só para recebê-la."],
        ] },
        { t: "nota", texto: "Fontes: base de conhecimento Gupy — “PDI na Gupy: metodologias 70:20:10 e GROW”, “Desenvolvimento na Gupy (T&D)”, “Feedback na Gupy”, “1:1 na Gupy” (GupyHub /jornada-gupier)." },
      ],
    },

    /* ---------------------------------------------------------------- 07 */
    {
      num: "07", titulo: "A mecânica da transição",
      itens: [
        { t: "p", texto: "Estudar bem não movimenta ninguém sozinho. A Gupy tem um caminho formal para troca de área, com requisitos objetivos — e vale conhecê-los no mês 1, não no mês 6, porque alguns dependem de tempo e de avaliação que não se mudam em uma semana." },
        { t: "lista", titulo: "Requisitos para se candidatar a uma vaga interna", intro: "Três condições, todas verificadas pela pessoa recrutadora junto à liderança:", itens: [
          "Mínimo de 6 meses de empresa e/ou na posição atual",
          "Boa avaliação de desempenho — não estar nos quadrantes 1, 2 e 4, nem em plano de superação",
          "Atender aos requisitos técnicos da posição — é isto que esta trilha constrói",
        ] },
        { t: "h", texto: "Os dois caminhos" },
        { t: "p", texto: "1. Candidatura. Comunicar a liderança atual e a liderança da área de design, e aplicar na vaga em vempra.gupy.io ou tech-career.gupy.io marcando “sim” em “você trabalha nessa empresa?”. Usar o e-mail corporativo e indicar a liderança atual como indicante — ela escreve concordando e justificando." },
        { t: "p", texto: "2. Encarreiramento. A liderança, conhecendo o desejo de carreira, conversa com a liderança de design. Havendo fit, a movimentação pode acontecer sem abertura de vaga nem processo seletivo. Este caminho depende inteiramente de a liderança saber do plano — mais uma razão para abrir o assunto na primeira 1:1, não no mês 6." },
        { t: "p", texto: "Aprovado, a data é combinada entre as lideranças, com passagem de bastão mínima de 30 dias. Não aprovado, vem feedback e um plano de desenvolvimento — que é resultado útil, não fracasso. Vagas também circulam no Slack em #tema-vagas-grupo-gupy." },
        { t: "h", texto: "Formalizar como PDI" },
        { t: "p", texto: "Colocar esta trilha no módulo de PDI do Gupy Performance e acompanhar uma vez por mês na 1:1 de desenvolvimento. Isso muda três coisas: torna o plano visível para a liderança, gera registro de evolução para a avaliação de desempenho, e transforma “quero mudar de área” em compromisso com indicador. O PDI deve buscar a intersecção entre a necessidade da pessoa e a da empresa — e um designer que já conhece o produto e o cliente por dentro é interesse dos dois lados." },
        { t: "destaque", tom: "acao", rotulo: "Fazer na primeira semana", texto: "Abrir o assunto na 1:1 com a liderança e pedir uma conversa de 30 minutos com alguém do time de design. Transição de carreira interna que acontece em segredo costuma terminar em pedido de demissão — não em movimentação." },
        { t: "nota", texto: "Fontes: base de conhecimento Gupy — “Contratação na Gupy: Talent Acquisition, recrutamento interno e externo” e “PDI na Gupy” (GupyHub /jornada-gupier). Os requisitos vigentes devem ser confirmados com a BP antes de aplicar." },
      ],
    },

    /* ---------------------------------------------------------------- 08 */
    {
      num: "08", titulo: "Rotina semanal",
      itens: [
        { t: "p", texto: "Sete horas por semana, distribuídas na proporção 70:20:10 do próprio método de desenvolvimento da Gupy. O que garante o resultado é a regularidade, não a intensidade: quatro horas toda semana batem doze horas num sábado a cada três semanas." },
        { t: "colunas", n: 2, cols: [
          { titulo: "70% · Prática — 4h", itens: ["2h Figma no projeto da fase", "1h escrita: síntese, spec ou case", "1h refazer tela real ou Crazy 8s"] },
          { titulo: "20% · Com pessoas — 2h", itens: ["1h design crit do time", "30min shadowing ou sessão de teste", "30min pedir crítica de um entregável"] },
          { titulo: "10% · Formal — 1h", itens: ["30min livro da fase", "15min artigo NN/g (diário, 5min)", "15min curso ou documentação de DS"] },
          { titulo: "Mensal", itens: ["1:1 de PDI com a liderança", "Apresentar 1 entregável ao time de design", "Revisar se a fase ainda faz sentido"] },
        ] },
        { t: "destaque", tom: "ancora", rotulo: "Equilíbrio", texto: "O guia interno de PDI é explícito nisso: garantir equilíbrio entre as ações do plano e a carga de trabalho. Semana de pico no suporte, corte a parte formal e preserve a prática — e não há problema nenhum em despriorizar ação que deixou de fazer sentido. Plano rígido em empresa de alto crescimento é plano abandonado." },
      ],
    },

    /* ---------------------------------------------------------------- 09 */
    {
      num: "09", titulo: "Armadilhas desta transição",
      itens: [
        { t: "tituladas", itens: [
          ["Estudar ferramenta em vez de método", "Figma se aprende em três semanas. Saber qual problema vale resolver leva anos. Se no mês 4 há 40 telas bonitas e nenhuma entrevista feita, a trilha desandou — e o mercado percebe isso em dez minutos de conversa de portfólio."],
          ["Começar pela interface", "É o erro nº 1 em produto SaaS: desenhar tela antes de entender o workflow produz UI bonita para o problema errado. Vindo do suporte a tentação é dobrada, porque já existe opinião formada sobre cada tela."],
          ["Confundir volume de ticket com prioridade", "Quem abre ticket é uma fatia específica da base. Os que desistiram em silêncio contam a história que falta — e é normalmente a mais importante. Recrutar também quem abandonou, não só quem reclamou."],
          ["Polir hipótese não validada", "Fidelidade proporcional à certeza. Horas de UI numa ideia que morre no primeiro teste é o desperdício mais comum de designer júnior. Baixa fidelidade não é preguiça: é gestão de risco."],
          ["Aceitar a primeira opção viável", "A velocidade da IA comprime a exploração. Antídoto: sempre pedir múltiplas direções e comparar explicitamente antes de escolher. Três direções divergentes em baixa fidelidade custam horas e evitam se apaixonar pela primeira ideia."],
          ["Tratar usuário sintético como evidência", "Persona de IA serve para pilotar roteiro e formular hipótese. Como “dado de usuário”, fabrica pesquisa: o modelo é bajulador por natureza, superestima taxa de conclusão e avalia feature melhor do que usuário real avaliaria."],
          ["Estudar escondido", "Sem a liderança e sem o time de design sabendo, perde-se o caminho de encarreiramento, o acesso à biblioteca do design system, o convite para o design crit e a chance de ser lembrado quando a vaga abrir. É o erro mais caro da lista, e o mais fácil de evitar."],
        ] },
      ],
    },

    /* ---------------------------------------------------------------- 10 */
    {
      num: "10", titulo: "Checklist de prontidão",
      itens: [
        { t: "p", texto: "Marcados todos estes itens, a pessoa tem o que uma vaga de Product Designer júnior/pleno em produto B2B pede — com um diferencial que candidato externo não tem: conhecer o produto e o cliente por dentro." },
        { t: "checklist", itens: [
          { texto: "Nomeio problema de usabilidade com vocabulário da área e classifico por severidade", ok: false },
          { texto: "Conduzi ao menos 10 entrevistas e sintetizei com citação de fonte", ok: false },
          { texto: "Sei ler funil e coorte, e defino métrica de sucesso antes de desenhar", ok: false },
          { texto: "Monto fluxo em alta fidelidade com componentes e tokens do design system", ok: false },
          { texto: "Desenho todos os estados: vazio, erro, loading, foco, 0/1/1000 itens", ok: false },
          { texto: "Valido contraste AA e ordem de foco sem precisar que alguém peça", ok: false },
          { texto: "Moderei ao menos 10 sessões de teste com critério de sucesso definido antes", ok: false },
          { texto: "Escrevi UX Spec que um dev leu e conseguiu estimar sem me perguntar nada", ok: false },
          { texto: "Apresentei trabalho em design crit e absorvi crítica sem defender por reflexo", ok: false },
          { texto: "Uso IA no processo com citação de fonte, anonimização e revisão humana", ok: false },
          { texto: "Tenho 3 cases escritos que sustentam uma conversa de 45 minutos", ok: false },
          { texto: "Minha liderança e o time de design conhecem e apoiam o plano", ok: false },
        ] },
        { t: "nota", texto: "Guia montado em setembro de 2026. Premissas: 6 meses a 6–8h/semana, transição interna na Gupy. Método: skill interna design-produto. Contexto interno: base de conhecimento Gupy (GupyHub), Central de Ajuda e Gupy Treinamento — fontes citadas em cada seção. Os requisitos de movimentação devem ser confirmados com a BP e as regras de ferramenta com @plataforma antes de agir. Todo material aqui pede revisão humana." },
      ],
    },
  ],
};
