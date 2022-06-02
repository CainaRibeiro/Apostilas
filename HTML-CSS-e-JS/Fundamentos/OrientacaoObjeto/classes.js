//A diferença para função construtora é apenas como escrever algumas coisas
//A classe já faz o prototype, não precisa colocar como na função construtora
class Pessoa {
    //Podemos ou não usar esse método abaixo:
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this. nome} está falando.`);
    }

    comer() {
        console.log(`${this. nome} está falando.`);
    }

    beber() {
        console.log(`${this. nome} está falando.`);
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);
p1.falar();

//Comparando com função construtora:
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está  falando`);
}

const p2 = new Pessoa2('Maria', 'Freitas');