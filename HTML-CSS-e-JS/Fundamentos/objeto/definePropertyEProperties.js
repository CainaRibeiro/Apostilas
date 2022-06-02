//defineProperty e defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    //o this passa o objeto
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave quando usar o forIn ou object.keys
        value: estoque, //valor da chave e pode ser uma função por exemplo, onde devemos chamar como: obj.estoque();
        writable: false, //se o valor pode ou não ser alterado
        configurable: true //se a chave pode ser apagada ou reconfigurada (usando outro Object.defineProperty)
    })

    Object.defineProperties(this, { // mais controle com o que podemos configurar com cada chave
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true, 
            configurable: true
        }
    });
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// console.log(Object.keys(p1))

// for(let chave in p1) {
//     console.log(chave);
// }