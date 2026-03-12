// criado um vetor de nomes
const Listanomes = ["Juliana", "Nilton", "Gustavo", "Kaique"];
console.log("\nExibindo todos os elementos do vetor:")
console.log(Listanomes)

console.log("\nExibindo o primeiro nome:")
console.log(Listanomes[0])

console.log("\nExibindo o segundo nome:")
console.log(Listanomes[1])

console.log("\nAdicionando um nome; ")
Listanomes.push("Maria");
console.log(Listanomes)

console.log("\nRemovendo o primeiro nome: ")
Listanomes.shift(); 
console.log(Listanomes)

console.log("\nRemovendo o último nome: ")
Listanomes.pop(); 
console.log(Listanomes)

console.log("\n Removendo o nome especificando o índice: ")
Listanomes.splice(1, 1);
console.log(Listanomes)