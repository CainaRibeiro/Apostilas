/**
 * Object.values
 * Object.entries
 * Object.assign(des, any) //des de destino
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * 
 * Já vimos:
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

//Spread
const produto = { nome: 'Produto', preco: 1.8 };
const caneca = {
    ...produto,
    material: 'porcelana'
};

//Object.assign
const caneca2 = Object.assign({}, produto, {material: 'porcelana'}) // faz a mesma coisa que o spread. Porém funciona assim: primeiro é passado um objeto vazio, depois de onde será copiado e podemos adicionar outros atributos no terceiro parâmetro (é opcional)

//Maneira mais manual:
const caneca3 = { nome: produto.nome, preco: produto.preco};

//Object.getOwnPropertyDescriptor
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retorna as propriedades de um atributo

//Object.values: retorna os valores
console.log(Object.values(produto));

//Object.entries: retorna as chaves e os valores de um objeto
console.log(Object.entries(produto));

//Exemplo usando for of e Obejct.entries
for(let entry of Object.entries(produto)) {
    console.log(entry);
}

//Complementando o exemplo acima usando destructuring
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);