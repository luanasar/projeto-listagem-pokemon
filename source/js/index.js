// O que precisamos fazer? Quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores o tema claro ou do tema escuro

//     - Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os esteilos do modo escuro sejam aplicados e mudar a imagem pra lua
//         -Passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
//         -Passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
//         -Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
//         -Passo 4 - adicionar a classe modo-escuro no body
//         -Passo 5 - trocar a imagem do botão de alterar tema pra lua

//     - Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar promodo claro e mudar a imagem pro sol
//         -Passo 6 - remover a classe do modo-escuro do body
//         -Passo 7 - trocar a imagem do botão de alterar tema pra sol

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  //Substitui remove/add("modo-escuro")
  body.classList.toggle("modo-escuro");

  if (modoEscuroAtivo) {
    // body.classList.remove("modo-escuro");
    imagemBotaoAlterarTema.setAttribute("src", "./source/imagens/sun.png");
  } else {
    // body.classList.add("modo-escuro");
    imagemBotaoAlterarTema.setAttribute("src", "./source/imagens/moon.png");
  }
});
