// O objeto em JS é uma função
console.log(typeof Object);

//Classe em JS também é função
class Produto {};
console.log(typeof Produto);

//Declarando funções:
//OBS: não ficar muito ligado aos formalismos de outras linguagens, pois em JS as funções que recebem um objeto ou string por exemplo, podem se comportar de maneiras diferentes
function imprimeSoma(a, b){ // não precisa colocar var, let ou const
    //por padrão, caso não haja um retorno, a mesma retornará o valor: undefined
    console.log(a+b);
}

imprimeSoma(2,3);
imprimeSoma(2); //irá imprimir NaN (not a number) porquê está somando o 2 com o parâmetro b não passado ou definido por padrão na declaração da função (exemplo abaixo desse valor padrão declarado na função)
imprimeSoma(2, 3, 4, 5, 6) // irá considerar apenas os 2 primeiros, já que a função recebe apenas 2 parâmetros
imprimeSoma(); // irá imprimir NaN (not a number) igual no segundo exemplo

function soma(a, b = 1){ // o b = 1 é para definir um valor padrão ao b caso o mesmo não tenha sido passado por parâmetro
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma()); //NaN porque para o 'a' não foi definido um valor padrão

function soma2(a, b = 1, c=2){
    return a + b + c;
}

console.log(soma2(2, undefined, 3)); //caso queiramos pular um valor, devemos usar o undefined como ao lado, e não null porquê senão assumirá o valor zero ou não passar nada, senão dará um erro

//Armazenando uma função em uma constante ou variável (função anônima). Exemplo:
const imprimeSoma2 = function(a,b) {
    console.log(a + b);
}

imprimeSoma2(2, 3);

//Armazenando também, mas de formas diferentes de declarar funções (arrow functions):
const soma3 = (a, b) => {
    return a + b;
}

console.log(soma3(2,3));

const subtracao = (a, b) => a - b; //usando dessa maneira não precisa colocar o return
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);

imprimir2('Jeito novo de declarar função');

