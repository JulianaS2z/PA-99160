const listadeAlunos = [
    {nome:'Juliana', Nota: 10.0},
    {nome:'Nilton', Nota: 7.0},
    {nome:'Gustavo', Nota: 7.0},
    {nome:'Kaique', Nota: 6.0},
    {nome:'Maria', Nota: 7.0}
];

//console.log("Encontre a aluna juliana e mostre a nota dela: ")
console.log("\nEncontrar o aluno(a): Juliana")
const usuarioEncontrado = listadeAlunos.find(u => u.nome === "Juliana")
console.log(usuarioEncontrado)
console.log(`Usuário encontrado: ${usuarioEncontrado.nome}, tem ${usuarioEncontrado.Nota} pontos`)

//Mostre a média geral da turma

console.log("\nMédia geral da turma: ")
const somaDasNotas = listadeAlunos.reduce((total, u) => total + u.Nota, 0)
console.log(`A soma das notas dos alunos é: ${somaDasNotas}`)
const media = somaDasNotas / listadeAlunos.length
console.log(`A média geral da turma é: ${media}`)

//Mostre o nome e a nota dos alunos com nota abaixo de 7.0
console.log("\nAlunos com nota abaixo de 7.0: ")
const alunosAbaixoDe7 = listadeAlunos.filter(u => u.Nota < 7.0)
alunosAbaixoDe7.forEach(aluno => console.log(`${aluno.nome}, tem ${aluno.Nota} pontos`))

//Mostre apenas o nome dos alunos com nota maior ou igual a 7.0
console.log("\nAlunos com nota maior ou igual a 7.0: ")
const alunosAcimaDe7 = listadeAlunos.filter(u => u.Nota >= 7.0)
alunosAcimaDe7.forEach(aluno => console.log(`${aluno.nome}, tem ${aluno.Nota} pontos`))