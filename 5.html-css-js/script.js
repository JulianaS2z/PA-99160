let botao = document.getElementById("gerarbotao");

botao.addEventListener("click", function () {
    
    let quantidade = Number(document.getElementById("qtdmacas").value);
    let caixaResultado = document.getElementById("resultado");

    if(quantidade <= 0){
        caixaResultado.innerHTML="Por favor, digite uma quantidade válida de maças!"
        return;
    }

let precoFinal;
if (quantidade < 12) {
    precoFinal = quantidade *1.30;
} else {
    precoFinal = quantidade * 1.00;
}

let valorFormatado = precoFinal.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' })
caixaResultado.innerHTML = `<strong>Sucesso!</strong> O valor total para ${quantidade} maçã(s) é de ${valorFormatado}.`;

});

//  Crie um site para resolver a seguinte questão:
// Escreva um programa que solicite ao usuário a quantidade de
// maçãs desejadas.
//  As maçãs custarão R$ 1,30 cada, se forem compradas menos de
// uma dúzia, e custarão R$ 1,00 cada, se forem compradas pelo
// menos 12 calcule e mostre valor total da compra
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 