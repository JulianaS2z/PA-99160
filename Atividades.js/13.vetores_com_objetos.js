// Vetor de objetos
const ListadeUsuarios = [
    { nome: "Juliana", idade: 21 },
    { nome: "Nilton", idade: 22 },
    { nome: "Gustavo", idade: 18 },
    { nome: "Kaique", idade: 19 }
]

console.log("\nExibindo o vetor de objetos:")
// Exibindo todos os elementos do Vetor

ListadeUsuarios.forEach(usuario => {
    console.log(`${usuario.nome}, tem ${usuario.idade} anos`)
})
console.log("\nFiltrando idade maior que 18 anos: ")

// ADCIONANDO UM FILTRO PARA MOSTRAR APENAS OS USUÁRIOS MAIORES DE 18 ANOS

const maioresDe18 = ListadeUsuarios.filter(usuario => usuario.idade > 18)

maioresDe18.forEach(usuario => 
console.log(`${usuario.nome}, tem ${usuario.idade} anos`)
)

console.log("\nMostrando apenas com os nomes dos usuários: ")
const listaDeNomes = ListadeUsuarios.map(u => u.nome)
listaDeNomes.forEach(nome => console.log(`${nome}`))

console.log("\nEncontrar um novo usuário: ")
const usuarioEncontrado = ListadeUsuarios.find(u => u.nome === "Juliana")
console.log(usuarioEncontrado)
console.log(`Usuário encontrado: ${usuarioEncontrado.nome}, tem ${usuarioEncontrado.idade} anos`)

console.log("\nSoma das idades dos usuários: ")
// total acumula a soma das idades
// 0 é o valor inicial para a soma
// u é o objeto para acessar a variável que contém a idade
const somaDasIdades = ListadeUsuarios.reduce((total, u) => total + u.idade, 0)
console.log(`A soma das idades dos usuários é: ${somaDasIdades}`)

