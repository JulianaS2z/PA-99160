let input1 = document.getElementById("N1");
let input2 = document.getElementById("N2");

let blocoNota2 = document.getElementById("Numero2");

let botao = document.getElementById("gerarBotao");

let divMedia = document.getElementById("media");
let divSoma = document.getElementById("soma");
let divProduto = document.getElementById("produto");
let divMaior = document.getElementById("maiorNumero");
let divMenor = document.getElementById("menorNumero");

/* Mostrar segundo campo */
input1.addEventListener("input", function() {
  if (input1.value !== "") {
    blocoNota2.style.display = "block";
  } else {
    blocoNota2.style.display = "none";
    input2.value = "";
  }
});

/* Calcular */
botao.addEventListener("click", function() {
  let n1 = parseFloat(input1.value);
  let n2 = parseFloat(input2.value);

  if (isNaN(n1) || isNaN(n2)) {
    alert("Digite dois números!");
    return;
  }

  let soma = n1 + n2;
  let media = soma / 2;
  let produto = n1 * n2;
  let maior = Math.max(n1, n2);
  let menor = Math.min(n1, n2);

  divMedia.innerHTML = "<strong>Média:</strong> " + media;
  divSoma.innerHTML = "<strong>Soma:</strong> " + soma;
  divProduto.innerHTML = "<strong>Produto:</strong> " + produto;
  divMaior.innerHTML = "<strong>Maior número:</strong> " + maior;
  divMenor.innerHTML = "<strong>Menor número:</strong> " + menor;

  divMedia.style.display = "block";
  divSoma.style.display = "block";
  divProduto.style.display = "block";
  divMaior.style.display = "block";
  divMenor.style.display = "block";
});