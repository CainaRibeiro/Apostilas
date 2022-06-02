const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Simulação de um reduce (melhor usar o foreach por ser mais performático que o reduce, nesse caso abaixo):
// let total = 0;
// a1.forEach(valor => {
//     total += valor;
// })


a1.forEach((valor, indice, array) => console.log(valor, indice));
    //console..log(array[indice]) //ao invés de usar o console.log(valor, indice)