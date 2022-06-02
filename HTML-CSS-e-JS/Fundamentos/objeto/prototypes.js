/*  Documentação:
    JS é baseado em protóttipos para passar propriedades e métodos de um objeto para outro.

    Definição de protótipo:
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objeos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tetnar encontrar eeste membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

/*
    O que eu entendi do vídeo:
    Prototype é como  se fosse herança em Java, onde usando isso, não precisamos redeclarar alguns atributos que seriam comuns, onde os mesmos ficam no elemento pai e apenas os métodos  ficam dentro de um prototype.
    OBS: Quando usamos funções construtoras, o JS cria automaticamente um prototype, apenas precisamos usá-la
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + '' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { //senão remover da função construtora do objeto, o prototype será sobrescrito
    return this.nome + '' + this.sobrenome
} //funciona no navegador (caso crie um html)

const pessoa1 = new Pessoa('Luiz', 'Otávio'); //Pessoa.prototype === pessoa1.__proto__
//Ordem de procura: pessoa1, depois Pessoa.prototype, depois Object.prototype (__proto__)
const data = new Date();

console.log(pessoa1);
console.log(data);

const objA = {
    chaveA: 'A',
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA // para fazer isso ao lado, temos que fazer o que está escrito abaixo
}

const objC = new Object(); //apenas para diferenciar a criação do objeto
objC.chaveC = 'C';

//OBS: Não é recomendado utilizar o __proto__

Object.setPrototypeOf(objB, objA); //fazendo o objA ser o "pai" do objB, e o prototype do objB é o Object.prototype que tem várias funções
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveA); //funciona porquê o __proto__ do objB é o objA

//Segundo exemplo
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(descontoPercent) {
    this.preco = this.preco - (this.preco * (descontoPercent / 100));
}

Produto.prototype.aumentaPreco = function(aumentoPercent) {
    this.preco = this.preco + (this.preco * (aumentoPercent / 100));
}

const p1  = new Produto('Camisa', 50);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype); //haverá um "constructor: Produto(nome, preco)" dentro de __proto__ no console do navegador e será exibido como se fosse um objeto da função construtora Produto

p2.aumentaPreco(10);

console.log(p1)
console.log(p2)

const p3 = Object.create(Produto.prototype, {  //criando um objeto já configurando o prototype dele
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42}
});
//p3.atributo1 = 'atributo1';
p3.aumentaPreco(10);
console.log(p3);