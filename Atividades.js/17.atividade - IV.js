// Atividade
// Crie uma função para calcular média arimética

notas = [5, 5, 5]
function media(n) {
    const soma = n.reduce((total, n) => total + n, 0)
    const media = soma / n.length
    return media
}

console.log(media(notas))
