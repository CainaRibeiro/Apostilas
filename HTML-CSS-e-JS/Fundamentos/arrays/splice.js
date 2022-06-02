const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice, quantidadePDeletar, elementoAdd1, elementoAdd2, elementoAdd3)

//simulando a função pop:
//nomes.splice(4, 1) //removendo do índice 4, 1 elemento
const removidos = nomes.splice(3, 2); // começa no índice 3 e remove 2 elementos //pode passar números negativos
//podemos passar no seugndo parâmetro, o: Number.MAX_VALUE para ele ir até o último número
console.log(nomes, removidos);

//ADICIONANDO:
const adicionando = nomes.splice(nomes.length, 0, 'Luíz', 'Marcelo'); //não mostrará nada pois está adicionando ao array nomes
console.log(nomes, adicionando)

//TROCANDO: //removendo o Luiz e adicionando o Ygor
const trocando = nomes.splice(3, 1, 'Ygor')
console.log(nomes, trocando);