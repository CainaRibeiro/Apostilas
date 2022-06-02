// Podemos retornar um objeto. Exemplo:
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1);
console.log(p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto; //retornando a função falaResto
}

const fala = falaFrase('Olá'); //como retorna a função falaResto e atribuímos a uma variável, podemos passar o argumento ao "fala"
const resto = fala('mundo!'); //dessa maneira estamos enviando a string "mundo!" ao retorno que é a função falaResto (e já tem o 'Olá')

console.log(resto); //e ao imprimirmos a constante, temos a string completa: "Olá mundo!"

//Outro exemplo do anterior:
function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    };
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadruplica(10));

//OBSERVAÇÃO: ESCOPO LÉXICO
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio'
    falaNome();
}

usaFalaNome();  // Irá imprimir 'Luiz' porquê pelo que o professor falou, nada usado no usaFalaNome() será lido pelo falaNome() chamado na função usaFalaNome()