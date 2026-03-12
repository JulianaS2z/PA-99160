let inputNota1 = document.getElementById("N1");
let inputNota2 = document.getElementById("N2");
let blocoNota2 = document.getElementById("Numero2"); 
let botao = document.getElementById("gerarBotao");

// 2. Selecionando os espaços onde os resultados vão aparecer
let divMedia = document.getElementById("media");
let divSoma = document.getElementById("soma");
let divProduto = document.getElementById("produto");
let divMaior = document.getElementById("maiorNumero");
let divMenor = document.getElementById("menorNumero");

// 3. Lógica para aparecer/esconder o 2º input
inputNota1.addEventListener("input", function() {
    if (inputNota1.value !== "") {
        blocoNota2.style.display = "block"; // aparece
    } else {
        blocoNota2.style.display = "none";  // esconde
        inputNota2.value = ""; // Limpa o segundo campo caso o primeiro seja apagado
    }
});

// 4. Lógica para calcular os resultados ao clicar no botão
botao.addEventListener("click", function() {
    // Pegamos os valores e convertemos para números (parseFloat para aceitar decimais)
    let n1 = parseFloat(inputNota1.value);
    let n2 = parseFloat(inputNota2.value);

    // Verificação de segurança: checa se o usuário realmente digitou os dois números
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, preencha os dois números para ver os resultados.");
        return; // Para a execução da função aqui
    }

    // Fazendo as contas pedidas no enunciado
    let soma = n1 + n2;
    let media = soma / 2;
    let produto = n1 * n2;
    
    // O JavaScript tem funções prontas para descobrir o maior e menor número!
    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);

    // Escrevendo os resultados na tela
    divMedia.innerHTML = "<strong>Média:</strong> " + media;
    divSoma.innerHTML = "<strong>Soma:</strong> " + soma;
    divProduto.innerHTML = "<strong>Produto:</strong> " + produto;
    divMaior.innerHTML = "<strong>Maior número:</strong> " + maior;
    divMenor.innerHTML = "<strong>Menor número:</strong> " + menor;

    // CORREÇÃO: Mostrando as divs que estavam escondidas pelo CSS
    divMedia.style.display = "block";
    divSoma.style.display = "block";
    divProduto.style.display = "block";
    divMaior.style.display = "block";
    divMenor.style.display = "block";
});