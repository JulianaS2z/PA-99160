let botao = document.getElementById("gerarbotao");

botao.addEventListener("click", function () {
    let quantidade = Number(document.getElementById("qtdmacas").value);
    let caixaResultado = document.getElementById("resultado");

    // Validação de erro
    if (quantidade <= 0) {
        caixaResultado.innerHTML = "<strong>Ops!</strong> Por favor, digite uma quantidade válida de maçãs!";
        caixaResultado.style.borderLeftColor = "#FFCC00"; // Borda amarela para aviso
        caixaResultado.style.backgroundColor = "#fff9e6";
        caixaResultado.style.display = "block";
        return;
    }

    let precoFinal;
    if (quantidade < 12) {
        precoFinal = quantidade * 1.30;
    } else {
        precoFinal = quantidade * 1.00;
    }

    let valorFormatado = precoFinal.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' });
    
    // Sucesso
    caixaResultado.innerHTML = `<strong>Compra Confirmada!</strong><br>O valor total para ${quantidade} maçã(s) é de <span style="color: #FF3B30; font-weight: bold;">${valorFormatado}</span>.`;
    caixaResultado.style.borderLeftColor = "#FF3B30"; // Borda volta a ser vermelha
    caixaResultado.style.backgroundColor = "#fef0f0";
    
    // Mostra a caixa na tela
    caixaResultado.style.display = "block";
});

//  Crie um site para resolver a seguinte questão:
// Escreva um programa que solicite ao usuário a quantidade de
// maçãs desejadas.
//  As maçãs custarão R$ 1,30 cada, se forem compradas menos de
// uma dúzia, e custarão R$ 1,00 cada, se forem compradas pelo
// menos 12 calcule e mostre valor total da compra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 