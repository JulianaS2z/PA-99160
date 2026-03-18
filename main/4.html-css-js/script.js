document.getElementById("gerarBotao").addEventListener("click", function() {
    const inputIdade = document.getElementById("idadeInput");
    const idadeText = inputIdade.value;
    const idade = parseInt(idadeText);
    
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
    if (isNaN(idade) || idade < 0 || idadeText === "") {
        // Mensagem de erro séria no terminal
        alert("> ERRO DE SISTEMA [ID: ERR-09]: DADOS DE IDADE INCOMPLETOS. INSIRA UM VALOR NUMERICO VALIDO.");
        return;
    }

    // 3. Lógica de Verificação (Textos traduzidos para o tema Wayne Tech)
    let targetDiv;

    if (idade < 16) {
        targetDiv = divs[0];
        targetDiv.innerHTML = `> [ANALISE CONCLUIDA]<br><strong>STATUS: ACESSO NEGADO // INELEGIVEL</strong><br>> Motivo: Sujeito abaixo da matriz de idade legal para votacao.`;
    } 
    else if (idade >= 16 && idade <= 17) {
        targetDiv = divs[1];
        targetDiv.innerHTML = `> [ANALISE CONCLUIDA]<br><strong>STATUS: FACULTATIVO // PARTICIPACAO OPCIONAL</strong><br>> Idade: ${idade} anos. O protocolo permite participacao opcional para esta faixa.`;
    } 
    else if (idade >= 18 && idade < 65) {
        targetDiv = divs[2];
        targetDiv.innerHTML = `> [ANALISE CONCLUIDA]<br><strong>STATUS: OBRIGATORIO // PARTICIPACAO EXIGIDA</strong><br>> Idade: ${idade} anos. Participacao ativa exigida pelas diretrizes legais.`;
    } 
    else if (idade >= 65) {
        targetDiv = divs[3];
        targetDiv.innerHTML = `> [ANALISE CONCLUIDA]<br><strong>STATUS: FACULTATIVO // PARTICIPACAO OPCIONAL</strong><br>> Idade: ${idade} anos. Status especial ativo. Participacao opcional permitida.`;
    } 

    // 4. Exibe o resultado na tela
    targetDiv.style.display = "block";
});