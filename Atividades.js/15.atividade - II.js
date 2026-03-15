// Vetor 
const numeros = [1, 2, 3, 4, 5]

// Usando o map, crie um vetor com os números 
// Do vetor 'numeros' cada um multiplicado por 2

//Filtre os elementos do vetor 'números' para 
//Obter um novo vetor apenas com números pares.

//Usando o reduce, some todos os números do vetor 'numero'.

const dobrados = numeros.map( n => n* 2);
console.log(dobrados);

const numerospar = numeros.filter(n => n % 2 == 0)
console.log(numerospar)

const somanumeros = numeros.reduce((total, n) => total + n, 0)
console.log(`A soma dos números ${somanumeros}`)
