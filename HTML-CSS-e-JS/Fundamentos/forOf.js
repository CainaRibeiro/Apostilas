//índices:    01234...  
const nome = 'Luiz Otávio';
const nomes =  ['Luiz', 'Otávio', 'Henrique'];

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

// for(let i=0; i<nome.length; i++) {
//     console.log(nome[i]);
// }

// for(let indice in nome){
//     console.log(nome[indice]);
// }

//DIFERENÇAS PARA O FOR OF:

for(let i=0; i<nomes.length; i++) {
    console.log(nomes[i]);
}

for(let indice in nomes){
    console.log(nomes[indice]);
}

for(let valor of nomes) {
    console.log(valor); //retorna direto o valor sem precisar colocar o índice
}

// FOR IN EM OBJETO
for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

//FOR OF EM OBJETO: dará um erro porquê o objeto pessoa não é um iterável (não é uma variável string por exemplo que tem índices, ou um array)
// for(let valor of pessoa) {

// }

//FOR EACH: aula específica mais a frente
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});