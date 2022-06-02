//IIFE: Immediately invoked function expression
//Envolvendo a função anônima em parênteses fazendo com que não tenha nada a ver com o que está fora deles e protege do escopo global
(function(idade, peso, altura) {
    const sobrenome = 'Blanc';
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Marcelo'))
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80); //chamando a função imediatamente

const nome = 'Qualquer coisa';