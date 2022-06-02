// documentação: no site "mdn" e "w3school"

let num1 = 9.54578
//let num2 = Math.floor(num1)
//let num2 = Math.ceil(num1)
let num2 = Math.round(num1);

console.log(num2)
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
console.log(Math.random()); //número aleatório entre 0 e 1
const aleatorio = Math.random() * (10 - 5) + 5; //número aleatório entre 5 e 10
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio)
console.log(aleatorio2);

console.log(Math.pow(2, 10)) // ou console.log(2 ** 10) (mais fácil)

let num3 = 9
console.log(num3 ** (1/2)) //raiz quadrada

console.log(100/0) // quanto mais próximo do 0, mais provável de aparecer o valor infinito como retorno