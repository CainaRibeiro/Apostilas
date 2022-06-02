//Funções mais importantes de arrays que serão muito utilizadas
//filter: sempre retorna um array com a mesma quantidade de elementos do array original ou menos
//filter: filtrar o array;
//map: modificar o array;
//reduce: reduzir o array em um único valor

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callbackFilter(valor) { // mais comum as pessoas jogarem funções anônimas no numeros.filter
//     return valor > 10;
// }

const numerosFiltrados = numeros.filter(valor => valor > 10); //função anônima
console.log(numerosFiltrados);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Marcelo', idade: 25},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade:32}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMais50Anos = pessoas.filter(obj => obj.idade > 50);
const pessoasTerminamComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a') // para garantir que será em minúscula e termina com 'a'
});
console.log(pessoasComNomeGrande);
console.log(pessoasComMais50Anos);
console.log(pessoasTerminamComA);