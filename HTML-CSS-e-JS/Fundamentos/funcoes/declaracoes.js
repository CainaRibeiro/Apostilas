//Function hoisting: igual no var, onde pode declarar em qualquer lugar do código que será feito o hoisting quando precisar
falaOi();

function falaOi() {
    console.log('Oi');
}

//First-class objects (Objetos de primeira classe): a função pode ser tratada como dado
//Function expression:
const souUmDado = function () { //pode nomear a função ao invés de usar uma anônima, por mais que não seja comum
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Executando a função abaixo:')
    funcao(); // mostrando que pode receber e executar uma função dentro da outra
}

executaFuncao(souUmDado);

//Arrow Function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//Exemplo bem usado mostrando que a função é um first-class objects:
setInterval(function() {
    console.log('além da função anonima usada abaixo, podemos colocar o nome da função como feito acima');
}, 1000);

//Dentro de um objeto:
const obj = { //pode usar de qualquer um dos jeitos abaixo, assim como nomear também senão me engano
    falar: function() {
        console.log('Estou falando...');
    },
    falar2() {
        console.log('Falando..')
    }
}
obj.falar();
obj.falar2();