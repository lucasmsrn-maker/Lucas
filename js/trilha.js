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
   ===================================================================== */

const trilha = [
  {
    bloco: "Fundamentos de UX",
    disciplinas: [
      { nome: "[preencher] Disciplina 1.1", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 1.2", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 1.3", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
      { nome: "[preencher] Disciplina 1.4", status: "concluido", aprendizado: "[preencher] O que aprendi nesta disciplina." },
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
