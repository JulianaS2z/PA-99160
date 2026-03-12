// FUNÇÃO SEM RETORNO
function cabeçalho() {
    console.log('===============================')
    console.log('Olá, seja bem-vindo!')
    console.log('===============================')
}

// FUNÇÃO COM RETORNO
const somar = (a,b) => {
    return a + b
}
const subtrair = (a,b) => a - b

//CHAMADA DA FUNÇÃO

const soma = somar(2, 3)
const subtracao = subtrair(2, 3)

//EXIBINDO O RESULTADO

console.log(`A soma é: ${soma}`)
console.log(`A subtração é: ${subtracao}`)