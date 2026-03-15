let botao = document.getElementById("resultado");

botao.addEventListener("click", function () {
    
    // 1. Pegando as informações digitadas
    let codigo = document.getElementById("codigo").value;
    let anoNascimento = Number(document.getElementById("anoNascimento").value);
    let tempoTrabalho = Number(document.getElementById("tempoTrabalho").value);
    let caixaResultado = document.getElementById("resultado");

    // Validação básica para evitar erros
    if (!codigo || anoNascimento <= 0 || tempoTrabalho < 0) {
        caixaResultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    // 2. O exercício pede o ano de nascimento, então precisamos calcular a idade
    // O comando new Date().getFullYear() pega automaticamente o ano em que estamos!
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    // 3. Estrutura de decisão usando o operador OU ( || )
    let mensagem = "";
    
    if (idade >= 65 || tempoTrabalho >= 30) {
        mensagem = "Requerer aposentadoria";
    } else {
        mensagem = "Não requerer aposentadoria";
    }

    // 4. Mostrando tudo na tela conforme o enunciado exigiu
    caixaResultado.innerHTML = `
        <strong>Código do Empregado:</strong> ${codigo} <br>
        <strong>Idade:</strong> ${idade} anos <br>
        <strong>Tempo de Trabalho:</strong> ${tempoTrabalho} anos <br><br>
        <strong>Status:</strong> ${mensagem}
    `;

});