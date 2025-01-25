
const cartoes = document.querySelectorAll(".cartao");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}


cartoes.forEach((cartao) => {
    cartao.addEventListener("click", () => {
        const cartaVirada = cartao.querySelector(".carta-virada");
        const descricao = cartao.querySelector(".descricao");
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("fundo-carta");
        descricao.classList.toggle("esconder");
    })
})


btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

const div = document.getElementById('teclas');
let position = 0;

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      position -= 10;
      div.style.left = position + 'px';
      break;
    case 'ArrowRight':
      position += 10;
      div.style.left = position + 'px';
      break;
  }
});

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      if (cartaoAtual > 0) {
        esconderCartaoSelecionado();
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
      }
      break;
    case 'ArrowRight':
      if (cartaoAtual < cartoes.length - 1) {
        esconderCartaoSelecionado();
        cartaoAtual++;
        mostrarCartao(cartaoAtual);
      }
      break;
  }
});