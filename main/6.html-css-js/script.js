// Mudamos o ID do botão para não conflitar com a div de resultado!
let botao = document.getElementById("btn-confirmar");

botao.addEventListener("click", function () {
    
    // 1. Pegando as informações digitadas
    let codigo = document.getElementById("codigo").value;
    let anoNascimento = Number(document.getElementById("anoNascimento").value);
    let tempoTrabalho = Number(document.getElementById("tempoTrabalho").value);
    let caixaResultado = document.getElementById("resultado");

    // Validação básica para evitar erros
    if (!codigo || anoNascimento <= 0 || tempoTrabalho < 0) {
        caixaResultado.innerHTML = "Por obséquio, preencha todos os campos do documento corretamente.";
        caixaResultado.style.display = "block";
        return;
    }

    // 2. Cálculo de Idade
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    // 3. Estrutura de decisão usando o operador OU ( || )
    let mensagem = "";
    
    if (idade >= 65 || tempoTrabalho >= 30) {
        mensagem = "Concedido! Requerer aposentadoria.";
    } else {
        mensagem = "Negado! Não requerer aposentadoria.";
    }

    // 4. Mostrando tudo na tela
    caixaResultado.innerHTML = `
        <strong>Matrícula Registrada:</strong> ${codigo} <br>
        <strong>Idade do Cidadão:</strong> ${idade} anos <br>
        <strong>Tempo de Serviço:</strong> ${tempoTrabalho} anos <br><br>
        <strong>Veredito Final:</strong> ${mensagem}
    `;
    
    // Faz a div aparecer na tela do pergaminho
    caixaResultado.style.display = "block";
});