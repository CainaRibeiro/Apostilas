//Funções mais importanets de arrays que serão muito utilizadas
//filter:: sempre retorna um array com a mesma quantidade de elementos do array original ou menos
//filter: filtrar o array;
//map: modificar o array;
//reduce: reduzir o array em um único valor

//Some todos os números (reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    //console.log(acumulador, valor);
    return acumulador
}, 0) //valor (opcional) inicial do acumulador

console.log(total);

//FAZENDO ABAIXO COM O REDUCE, MAS NÃO FAZER, POIS PODEMOS FAZER FACILMENTE COM O FILTER
const pares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []) //valor (opcional) inicial do acumulador

console.log(pares);


const dobro = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []) //valor (opcional) inicial do acumulador

console.log(dobro);

// function callbackFilter(valor) { // mais comum as pessoas jogarem funções anônimas no numeros.filter
//     return valor > 10;
// }

//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Marcelo', idade: 25},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade:32}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) {
        return acumulador;
    }
    return valor;
}, 0)

console.log(maisVelha);