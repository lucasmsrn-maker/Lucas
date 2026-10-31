/* Cores e fontes da página (as mesmas que ficavam dentro do index.html) */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  // O main.js monta 'badge--' + status; o Tailwind não enxerga esse nome completo, então ele fica fixo aqui
  safelist: ['badge--concluido', 'badge--andamento', 'badge--proximo'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',      // cor principal
        apoio: '#8A8A8F',    // cor de apoio (decorativa)
        titulo2: '#7A7A80',  // linha 2 do título (contraste AA para texto grande)
        leitura: '#4A4A4F',  // texto de leitura
        sec: '#6B6B6B',      // legendas e rótulos
        fundo: '#F4F4F5',
        cartao: '#ECECEE',
        borda: '#D9D9DD',
        vidro: '#9A9A9A',    // rótulo sobre fundo escuro
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: { card: '28px', hero: '32px' },
    },
  },
};
