let botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
    
    // 1. Captura as notas digitadas
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let caixaResultado = document.getElementById("resultado");

    // 2. Validação: Verifica se ALGUMA nota é menor que 0 OU maior que 10
    // O .trim() e value === "" evitam que campos vazios sejam lidos como zero
    if (document.getElementById("nota1").value === "" || 
        document.getElementById("nota2").value === "" || 
        document.getElementById("nota3").value === "" ||
        nota1 < 0 || nota1 > 10 || 
        nota2 < 0 || nota2 > 10 || 
        nota3 < 0 || nota3 > 10) {
        
        caixaResultado.innerHTML = "<strong>Atenção:</strong> Por favor, preencha todos os campos com notas válidas entre 0 e 10.";
        caixaResultado.style.borderLeftColor = "#dc3545"; // Borda vermelha de erro
        caixaResultado.style.display = "block";
        return; 
    }

    // 3. Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = "";
    let cor = "";
    let corBorda = "";

    // 4. Verifica a situação do aluno
    if (media >= 7.0) {
        situacao = "Aprovado";
        cor = "#198754"; // Verde
        corBorda = "#198754";
    } 
    else if (media >= 5.0 && media < 7.0) {
        situacao = "em Recuperação";
        cor = "#fd7e14"; // Laranja
        corBorda = "#fd7e14";
    } 
    else {
        situacao = "Reprovado";
        cor = "#dc3545"; // Vermelho
        corBorda = "#dc3545";
    }

    // 5. Mostra o resultado na tela
    caixaResultado.style.borderLeftColor = corBorda; // Muda a cor da barrinha lateral
    caixaResultado.innerHTML = `
        Média do Aluno: <strong>${media.toFixed(1)}</strong> <br>
        Situação Acadêmica: <strong style="color: ${cor};">${situacao}</strong>
    `;
    
    caixaResultado.style.display = "block"; // Faz a caixa aparecer
});