let valor; //não inicializada
console.log(valor);
//console.log(valor2); //dará um erro pois a variável valor não foi definfida (undefined)

valor = null; //ausência de valor; pode ser usado para deixar a variável vazia e é padrão usar ao invés do undefined, caso precise
console.log(valor);
//console.log(valor.toString()); // ERRO que vai dar: não é possível acessar a propriedade toString pois o valor de valor é nulo; o que acontece se for undefined também

const PRODUTO = {};
console.log(PRODUTO.preco); // undefined porque o preco não está definido
console.log(PRODUTO);

PRODUTO.preco = 3.50;
console.log(PRODUTO);

PRODUTO.preco = undefined; // EVITAR, caso queira limpar, usar 0 (zero) para tipo number ou null
console.log(!!PRODUTO.preco); // dará falso porquê não foi definido
console.log(PRODUTO);

//para limpar um atributo, usamos o delete. Exemplo abaixo:
//delete produto.preco;
//console.log(produto);

PRODUTO.preco = null; // Caso tenha um produto de graça ou com preço igual a zero e queiramos diferenciar o zero do "sem preço" por exemplo, podemos usar o null
console.log(!!PRODUTO.preco);
console.log(PRODUTO);
