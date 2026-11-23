
const redacoes = [
  { ano: "1º Ano", titulo: "O impacto da tecnologia", texto: "Cole aqui sua primeira redação." },
  { ano: "1º Ano", titulo: "Meio ambiente", texto: "Cole aqui sua segunda redação." },
  { ano: "1º Ano", titulo: "A importância da educação", texto: "Cole aqui sua terceira redação." },
  { ano: "1º Ano", titulo: "A convivência em sociedade", texto: "Cole aqui sua quarta redação." },
  { ano: "1º Ano", titulo: "O valor da leitura", texto: "Cole aqui sua quinta redação." },
  { ano: "2º Ano", titulo: "Desafios da juventude", texto: "Cole aqui sua sexta redação." },
  { ano: "2º Ano", titulo: "O uso consciente da internet", texto: "Cole aqui sua sétima redação." },
  { ano: "2º Ano", titulo: "Preservação da natureza", texto: "Cole aqui sua oitava redação." },
  { ano: "2º Ano", titulo: "A influência das redes sociais", texto: "Cole aqui sua nona redação." },
  { ano: "2º Ano", titulo: "Cidadania e participação", texto: "Cole aqui sua décima redação." },
  { ano: "3º Ano", titulo: "Os desafios do futuro", texto: "Cole aqui sua décima primeira redação." },
  { ano: "3º Ano", titulo: "Tecnologia e sociedade", texto: "Cole aqui sua décima segunda redação." },
  { ano: "3º Ano", titulo: "Responsabilidade social", texto: "Cole aqui sua décima terceira redação." },
  { ano: "3º Ano", titulo: "Caminhos para a inclusão", texto: "Cole aqui sua décima quarta redação." },
  { ano: "3º Ano", titulo: "Planos para o futuro", texto: "Cole aqui sua décima quinta redação." }
];

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-redacoes");
  const contador = document.getElementById("contador-redacoes");

  const modal = document.getElementById("modal-leitura");
  const modalAno = document.getElementById("modal-ano");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalTexto = document.getElementById("modal-texto");
  const botaoFechar = document.querySelector(".fechar-modal");

  if (!lista || !contador || !modal || !botaoFechar) {
    console.error("Não foi possível encontrar os elementos do portfólio no HTML.");
    return;
  }

  contador.textContent = redacoes.length;

  function abrirModal(redacao) {
    modalAno.textContent = redacao.ano;
    modalTitulo.textContent = redacao.titulo;
    modalTexto.textContent = redacao.texto;

    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function fecharModal() {
    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  redacoes.forEach((redacao, indice) => {
    const cartao = document.createElement("button");

    cartao.type = "button";
    cartao.className = "card-redacao";

    const numero = document.createElement("span");
    numero.className = "numero";
    numero.textContent =
      `REDAÇÃO ${String(indice + 1).padStart(2, "0")} · ${redacao.ano}`;

    const titulo = document.createElement("h3");
    titulo.textContent = redacao.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = "Clique para ler →";

    cartao.append(numero, titulo, descricao);

    cartao.addEventListener("click", () => abrirModal(redacao));

    lista.appendChild(cartao);
  });

  botaoFechar.addEventListener("click", fecharModal);

  modal.addEventListener("click", (evento) => {
    if (evento.target.dataset.fechar === "true") {
      fecharModal();
    }
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.classList.contains("aberto")) {
      fecharModal();
    }
  });

  // Alternância de tema
  const secaoMedio = document.getElementById("medio");

  if (secaoMedio && "IntersectionObserver" in window) {
    const observadorTema = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        document.body.classList.toggle(
          "tema-maduro",
          entrada.isIntersecting
        );
      });
    }, { threshold: 0.25 });

    observadorTema.observe(secaoMedio);
  }

  // Animação da linha do tempo
  const eventos = document.querySelectorAll(".evento");

  if ("IntersectionObserver" in window) {
    const observadorEventos = new IntersectionObserver((entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    eventos.forEach((evento) => observadorEventos.observe(evento));
  } else {
    eventos.forEach((evento) => evento.classList.add("visivel"));
  }
});
