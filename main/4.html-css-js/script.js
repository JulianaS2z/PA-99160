document.getElementById("gerarBotao").addEventListener("click", function() {
    const inputIdade = document.getElementById("idadeInput");
    const idade = parseInt(inputIdade.value);
    
    // Lista de todas as divs de resultado para facilitar o reset
    const divs = [
        document.getElementById("menoresde16"),
        document.getElementById("entre16e17"),
        document.getElementById("maior"),
        document.getElementById("maior65")
    ];

    // 1. Reset: Esconde todas as divs antes de mostrar a nova
    divs.forEach(div => div.style.display = "none");

    // 2. Validação básica
    if (isNaN(idade) || idade < 0 || inputIdade.value === "") {
        alert("ERRO CRÍTICO: Insira uma idade válida no terminal.");
        return;
    }

    // 3. Lógica de Verificação
    let targetDiv;

    if (idade < 16) {
        targetDiv = divs[0];
        targetDiv.innerHTML = `<strong>STATUS: ACESSO NEGADO</strong><br>> Usuário abaixo da idade mínima permitida para votação.`;
    } 
    else if (idade >= 16 && idade <= 17) {
        targetDiv = divs[1];
        targetDiv.innerHTML = `<strong>STATUS: FACULTATIVO</strong><br>> Idade: ${idade} anos. O sistema permite voto opcional para esta classe.`;
    } 
    else if (idade >= 18 && idade <= 65)ggg {
        targetDiv = divs[2];
        targetDiv.innerHTML = `<strong>STATUS: OBRIGATÓRIO</strong><br>> Idade: ${idade} anos. Participação eleitoral exigida por lei.`;
    } 
    else {
        targetDiv = divs[3];
        targetDiv.innerHTML = `<strong>STATUS: FACULTATIVO (SÊNIOR)</strong><br>> Idade: ${idade} anos. Voto opcional detectado para nível sênior.`;
    }

    // 4. Exibe o resultado com um pequeno delay para simular "processamento"
    targetDiv.style.display = "block";
});