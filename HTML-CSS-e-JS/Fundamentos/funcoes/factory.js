//Forma do JS de trabalhar com orientação a objetos, porém pode ser confuso para quem tem experiência em outras linguagens
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        get nomeCompleto() { // se colocar get nomeCompleto(), ele funciona como um atributo quando chamar ela, onde não podemos colocar os parênteses senão dará um erro
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function (assunto) {
            return `${nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
        imc() {
            const indice =  this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
};

const p1 = criaPessoa('Marcelo', 'Blanc', 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
console.log(p1.imc());
console.log(p1);
console.log(p1.fala('falando sobre JS'));

console.log();

const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.nome);
console.log(p2.sobrenome);
console.log(p2.imc());
console.log(p2);
console.log(p2.fala('falando sobre JS'));