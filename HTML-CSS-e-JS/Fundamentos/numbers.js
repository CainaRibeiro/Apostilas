// Precisão devido ao padrão IEEE 754-2008
let num1 = 0.7; //number
let num2 = 0.1; //number

// PODEMOS RESOLVER DESSA MANEIRA, MAS A QUE DA MENOS TRABALHO É A POSTERIOR DE CONVERSÃO
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.7
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

// Não resolve 100 % o problema colocar apenas o toFixed(2), apenas se for somente para mostrar ao usuário final, pois para que a conta seja feita da forma correta, devemos converter o número para Number, int ou float
num1 = Number(num1.toFixed(2));
// podemos usar o parseInt(num1.toFixed(2)) OU
// o parseFloat(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1)); // também tem o isNaN() e o isFloat()

console.log(num1.toString() + num2) // converte o num1 para string
num1 = num1.toString(); // alterando o tipo da variável num1
console.log(num1.toString(2));
num1 = Number(num1)
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

let temp = num1 + '5';
console.log(Number.isNaN(num1));
console.log(temp);

// podemos usar a conversão junto com o prompt dessa forma: const num = Number(prompt('Digite o seu número'))