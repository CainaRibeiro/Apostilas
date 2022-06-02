//Produtos: camiseta e caneca
//camiseta: cor
//caneca: material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) //linkando as duas funções // o this é para referenciar o objeto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //passando os prototypes de Produto para Camiseta
//antes era: Camisea.prototype.consructor = Camiseta; e devemos passar isso para que volte o construtor para Camiseta
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) { //sobrescrevendo
    this.preco = this.preco + (this.preco * (percentual/100));
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                return;
            }
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
}

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Branca')
camiseta.aumento(100);
console.log(produto);
console.log(camiseta);

const caneca = new Caneca('CanecaAzul', 20.00, 'Porcelana', 5);
caneca.estoque = 100;
caneca.aumento(10);
console.log(caneca);
console.log(caneca.estoque);