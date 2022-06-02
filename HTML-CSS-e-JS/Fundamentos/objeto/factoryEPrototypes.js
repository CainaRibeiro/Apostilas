const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

//Ao invés de usar herança, podemos usar COMPOSIÇÃO ou MIXING (outro nome)
const pessoaPrototype = { ...falar, ...comer, ...beber }; //OU depois do igual: Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, { //deixando as  funções acima no prototype
        nome: {value: nome}, //devemos colocar um outro objeto e podemos colocar as propriedades
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
p1.falar();
p2.falar();
p1.comer();
p1.beber();