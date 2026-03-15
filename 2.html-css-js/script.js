function resultadoMedia() {
    // 1. Captura os elementos e valores
    let caixaResultado = document.getElementById("resultadoMedia");
    let nomeAluno = document.getElementById("nomeInput").value;
    let valorNota1 = Number(document.getElementById("nota1").value);
    let valorNota2 = Number(document.getElementById("nota2").value);
    let valorNota3 = Number(document.getElementById("nota3").value);

    // 2. Valida se as notas estão entre 0 e 10
    if (valorNota1 > 10 || valorNota1 < 0 || valorNota2 > 10 || valorNota2 < 0 || valorNota3 > 10 || valorNota3 < 0 ) {
        caixaResultado.innerHTML = "Por favor, digite notas válidas entre 0 a 10!"; 
        return;  
    }
    
    // 3. Faz o cálculo da média
    let media = (valorNota1 + valorNota2 + valorNota3) / 3;
    
    // 4. Descobre se está aprovado ou reprovado
    let situacao = ""; 
    if (media >= 7.0) {
        situacao = "Aprovado(a)";
    } else {
        situacao = "Reprovado(a)";
    }

    // 5. Junta tudo e mostra na tela!
    // Usamos a variável caixaResultado para alterar o HTML
    caixaResultado.innerHTML = `Olá, ${nomeAluno}! Sua média foi ${media.toFixed(1)}. Status: ${situacao}`;
}