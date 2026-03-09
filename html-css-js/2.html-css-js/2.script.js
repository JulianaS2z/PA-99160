let inputNota1 = document.getElementById("nota1");
let blocoNota2 = document.getElementById("blocoNota2"); // Pega a <div> inteira!

inputNota1.addEventListener("input", function() {
    if (inputNota1.value !== "") {
        blocoNota2.style.display = "block"; // aparece
    } else {
        blocoNota2.style.display = "none"; // esconde (corrigido de "nome" para "none")
    }
});

let botao = document.getElementById("gerarBotao");
let caixaResultado = document.getElementById("resultadoMedia");

botao.addEventListener("click", function() {
    
    // Pega o nome do aluno (é texto, então não precisa de conversão)
    let nomeAluno = document.getElementById("nomeInput").value;
    
    // Pega as notas e converte para Número (para evitar a pegadinha!)
    let valorNota1 = Number(document.getElementById("nota1").value);
    let valorNota2 = Number(document.getElementById("nota2").value);

    if (valorNota1 > 10 || valorNota1 < 0 || valorNota2 > 10 || valorNota2 < 0){
        caixaResultado.innerHTML = "Por favor, digite notas válidas entre 0 a 10!"; 
        return;  
    }
    
    // 3. Faz o cálculo da média
    let media = (valorNota1 + valorNota2) / 2;
    
    // 4. Descobre se está aprovado ou reprovado
    let situacao = ""; // Criamos uma caixinha vazia para guardar a palavra
    if (media >= 7.0) {
        situacao = "Aprovado(a) ";
    } else {
        situacao = "Reprovado(a)";
    }
    
    // 5. Junta tudo e mostra na tela!
    // O comando innerHTML "escreve" dentro da div resultadoMedia
    caixaResultado.innerHTML = `Olá, ${nomeAluno}! Sua média foi ${media.toFixed(1)}. Status: ${situacao}`;
    
});