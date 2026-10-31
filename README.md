# Do atendimento ao design

Landing page da minha transição de Atendimento ao Cliente para Product Design: o que já estudei, o que estou estudando e como aplico na prática.

## Como abrir

Abra o `index.html` no navegador. A página não depende de nenhum serviço externo: o CSS e as fontes estão neste projeto.

## Como atualizar a trilha de estudos

Edite `js/trilha.js`. As instruções estão no topo do arquivo. Ao mudar um `status`, a barra de progresso, os contadores e os selos se atualizam sozinhos. Para isso não é preciso recompilar nada.

## Como recompilar o CSS (só se mudar classes do Tailwind)

O arquivo `css/tailwind.css` é gerado. Se você trocar classes do Tailwind no `index.html` ou no `js/main.js`, rode na pasta do projeto (precisa do Node.js):

```
npx tailwindcss@3.4.17 -c tailwind/tailwind.config.js -i tailwind/input.css -o css/tailwind.css --minify
```

Cores e fontes ficam em `tailwind/tailwind.config.js`. Os botões e selos ficam em `tailwind/input.css`. Se criar uma classe cujo nome o `main.js` monta por concatenação (como `badge--` + status), inclua o nome na lista `safelist` do config.

## Segurança

`vercel.json` define os headers de segurança (CSP, X-Frame-Options, entre outros). A CSP só permite scripts, estilos, fontes e imagens do próprio site. Se um dia precisar de um serviço externo (formulário, analytics), ele precisa ser liberado ali.

## Estrutura

```
index.html                 página
css/site.css               fontes (@font-face), base e animações
css/tailwind.css           estilos gerados pelo Tailwind (não editar à mão)
fonts/                     Inter e Lora (woff2)
js/trilha.js               dados da trilha de estudos (editável)
js/main.js                 interações
js/boot.js                 marca que o JavaScript está ativo
tailwind/                  configuração e entrada para recompilar o CSS
vercel.json                headers de segurança
assets/foto-lucas.png      foto sem fundo usada no topo
```
