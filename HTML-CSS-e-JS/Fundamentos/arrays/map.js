//Funções mais importantes de arrays que serão muito utilizadas
//filter:: sempre retorna um array com a mesma quantidade de elementos do array original ou menos
//filter: filtrar o array;
//map: modificar o array;
//reduce: reduzir o array em um único valor

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map( (valor, indice) => `${indice} -> ${valor * 2}`);

console.log(numerosEmDobro);

// function callbackFilter(valor) { // mais comum as pessoas jogarem funções anônimas no numeros.filter
//     return valor > 10;
// }

//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto (id)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Marcelo', idade: 25},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade:32}
];

const nomes = pessoas.map( obj => obj.nome);
const idades = pessoas.map( obj => ({ idade: obj.idade })); //senão envolver entre parênteses, dará um erro e o VS Code mudará para o que ele acha correto
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})

console.log(nomes);
console.log(idades);
console.log(comIds);
console.log(pessoas);


