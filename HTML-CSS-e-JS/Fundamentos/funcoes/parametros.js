// ler o que está no arquivo "funcao" e no arquivo de word de anotação
// Desestruturação de array ou objeto
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
// podemos fazer assim: funcao({nome:'Luiz', sobrenome:'Otávio', idade:20}); ou como abaixo:
let obj = { nome:'Luiz', sobrenome:'Otávio', idade: 20 };
funcao(obj);

//passando um operador para a função
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') {
            acumulador = acumulador + numeros;
        } else if(operador === '-') {
            acumulador -= numeros;
        } else if (operador === '*') {
            acumulador  *= numeros;
        } else if (operador === '/') {
            acumulador /= numeros;
        }
    };
}
conta('+', 1, 20, 30, 40, 50) //pode colocar [20, 30, 40, 50] ou colocar um  rest operation