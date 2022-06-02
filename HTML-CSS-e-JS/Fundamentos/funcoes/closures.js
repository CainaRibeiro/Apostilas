//Closure: habilidade que uma função possui de acessar o seu escopo léxico
//Escopo global

function retornaFuncao() { //Closure (acesso do script ao que foi declarado anteriormente, onde caso seja passado por parâmetro, essas variáveis passadas serão diferentes)
    const nome = 'Luiz';
    return function() { // Script (escopo do que foi declarada)
        return nome;
    }
}

const funcao = retornaFuncao() //recebe uma funcao anônima que está retornando na função chamada
console.log(funcao);