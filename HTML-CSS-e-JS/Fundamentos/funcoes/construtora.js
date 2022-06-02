// Função construtora: constroi objetos
// Função fábrica: fabrica objetos

// na construtora precisa iniciar com letra maiúscula e com a palavra new. Exemplo abaixo

//Palavra new: cria um objeto vazio e atrela a palavra this dentro da função ao objeto (ou seja, a palavra this vai variar de acordo com cada objeto criado)

function Pessoa(nome, sobrenome) {
    //Atributos privados. Só existirá dentro da função, não fora dela, para não ser devemos usar o this.atributo
    const ID = 123456;
    const metodoInterno = function() {
        //modo privado
    };

    //Atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }

    //Object.freeze(this); //faz com que NADA do objeto possa ser alterado fora da função construtora dele // OBS: também serve para arrays
}

const p1 = new Pessoa('Luiz', 'Otávio');
//o p1.freeze() faz com que o objeto não seja alterado durante o código
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo()

console.log(p1.nome);
console.log(p2.nome);