// =====================================================
// PORTFÓLIO: EDITE OS TÍTULOS E OS TEXTOS NESTA LISTA.
// Substitua os exemplos pelo conteúdo das suas 15 redações.
// =====================================================
const redacoes = [
  { ano: "1º Ano", titulo: "O impacto da tecnologia", texto: "Cole aqui o texto completo da sua primeira redação." },
  { ano: "1º Ano", titulo: "Meio ambiente", texto: "Cole aqui o texto completo da sua segunda redação." },
  { ano: "1º Ano", titulo: "A importância da educação", texto: "Cole aqui o texto completo da sua terceira redação." },
  { ano: "1º Ano", titulo: "A convivência em sociedade", texto: "Cole aqui o texto completo da sua quarta redação." },
  { ano: "1º Ano", titulo: "O valor da leitura", texto: "Cole aqui o texto completo da sua quinta redação." },
  { ano: "2º Ano", titulo: "Desafios da juventude", texto: "Cole aqui o texto completo da sua sexta redação." },
  { ano: "2º Ano", titulo: "O uso consciente da internet", texto: "Cole aqui o texto completo da sua sétima redação." },
  { ano: "2º Ano", titulo: "Preservação da natureza", texto: "Cole aqui o texto completo da sua oitava redação." },
  { ano: "2º Ano", titulo: "A influência das redes sociais", texto: "Cole aqui o texto completo da sua nona redação." },
  { ano: "2º Ano", titulo: "Cidadania e participação", texto: "Cole aqui o texto completo da sua décima redação." },
  { ano: "3º Ano", titulo: "Os desafios do futuro", texto: "Cole aqui o texto completo da sua décima primeira redação." },
  { ano: "3º Ano", titulo: "Tecnologia e sociedade", texto: "Cole aqui o texto completo da sua décima segunda redação." },
  { ano: "3º Ano", titulo: "Responsabilidade social", texto: "Cole aqui o texto completo da sua décima terceira redação." },
  { ano: "3º Ano", titulo: "Caminhos para a inclusão", texto: "Cole aqui o texto completo da sua décima quarta redação." },
  { ano: "3º Ano", titulo: "Planos para o futuro", texto: "Cole aqui o texto completo da sua décima quinta redação." }
];

// Cria os cartões automaticamente.
const lista = document.getElementById("lista-redacoes");
const contador = document.getElementById("contador-redacoes");
contador.textContent = redacoes.length;

redacoes.forEach((redacao, indice) => {
  const cartao = document.createElement("button");
  cartao.type = "button";
  cartao.className = "card-redacao";
  cartao.innerHTML = `
    <span class="numero">REDAÇÃO ${String(indice + 1).padStart(2, "0")} · ${redacao.ano}</span>
    <h3></h3>
    <p>Clique para ler →</p>
  `;
  // textContent evita interpretar o título como HTML.
  cartao.querySelector("h3").textContent = redacao.titulo;
  cartao.addEventListener("click", () => abrirModal(redacao));
  lista.appendChild(cartao);
});

// Modal de leitura.
const modal = document.getElementById("modal-leitura");
const modalAno = document.getElementById("modal-ano");
const modalTitulo = document.getElementById("modal-titulo");
const modalTexto = document.getElementById("modal-texto");
const botaoFechar = document.querySelector(".fechar-modal");

function abrirModal(redacao) {
  modalAno.textContent = redacao.ano;
  modalTitulo.textContent = redacao.titulo;
  modalTexto.textContent = redacao.texto;
  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  botaoFechar.focus();
}

function fecharModal() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

botaoFechar.addEventListener("click", fecharModal);
modal.addEventListener("click", (evento) => {
  if (evento.target.dataset.fechar === "true") fecharModal();
});
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && modal.classList.contains("aberto")) fecharModal();
});

// Muda do visual infantil para o visual mais maduro ao chegar ao Ensino Médio.
const secaoMedio = document.getElementById("medio");
const observadorTema = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    document.body.classList.toggle("tema-maduro", entrada.isIntersecting);
  });
}, { threshold: 0.25 });
observadorTema.observe(secaoMedio);

// Anima os blocos da linha do tempo quando aparecem na tela.
const eventos = document.querySelectorAll(".evento");
const observadorEventos = new IntersectionObserver((entradas, observador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });
eventos.forEach((evento) => observadorEventos.observe(evento));
