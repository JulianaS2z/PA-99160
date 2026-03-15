let botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
    
    // 1. Captura as notas digitadas
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let caixaResultado = document.getElementById("resultado");

    // 2. Validação: Verifica se ALGUMA nota é menor que 0 OU maior que 10
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        caixaResultado.innerHTML = "<strong>Atenção:</strong> Por favor, digite apenas notas entre 0 e 10!";
        caixaResultado.style.color = "red";
        return; // Para o código aqui até o usuário arrumar as notas
    }

    // 3. Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    let situacao = "";
    let cor = "";

    // 4. Verifica a situação do aluno usando if, else if e else
    if (media >= 7.0) {
        situacao = "Aprovado";
        cor = "green"; // Verde para aprovado
    } 
    // Usamos o && (E) porque a média tem que ser maior/igual a 5 E menor que 7
    else if (media >= 5.0 && media < 7.0) {
        situacao = "em Recuperação";
        cor = "orange"; // Laranja para recuperação
    } 
    else {
        situacao = "Reprovado";
        cor = "red"; // Vermelho para reprovado
    }

    // 5. Mostra o resultado na tela
    caixaResultado.style.color = "black"; // Volta o texto normal para preto
    caixaResultado.innerHTML = `
        A média do aluno é: <strong>${media.toFixed(1)}</strong> <br>
        Situação: <strong style="color: ${cor};">${situacao}</strong>
    `;

});