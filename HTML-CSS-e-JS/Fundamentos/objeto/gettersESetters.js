//Getters e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    //se colocar o um this.estoque e tiver um set, podemos criar um loop, pois o set chamará a função que chamará o set que chamará a função de novo e assim por diante. Para não criarmos um loop, podemos ou usar o que é passado pelo parâmetro ou criar um variável

    let estoquePrivado = estoque;
    //o this passa o objeto
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque, //não precisa desses dois para os getters e setters
        // writable: false, 
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor != 'number'){
                throw new TypeError('Entre com um valor');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) { //função factory
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', ''); // interceptando a palavra 'coisa' da string no set através do sinal de atribuição do p2.nome = 'Qualquer coisa';
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 'Qualquer valor';
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);