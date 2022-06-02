//Dado primitivo symbol para criar uma chave PRIVADA dentro do elemento
const _velocidade = Symbol('velocidade]') //irá criar uma chave aleatória;
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // para dificultar que seja acessada por fora do objeto
    }

    get velocidade() {
        console.log('GETTER') //apenas para mostrar que está sendo utilizado o getter
        return this[_velocidade];
    }

    set velocidade(valor) {
        console.log('SETTER') //apenas para mostrar que está sendo utilizado o setter
        if(typeof valor != 'number') {
            return;
        }
        if(valor >= 100 || valor <= 0) {
            return;
        }
        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) {
            return;
        }
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0) {
            return;
        }
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');

for(let i=0; i<=200; i++){
    carro1.acelerar();
}

carro1.velocidade = -1;
console.log(carro1.velocidade);

// Exemplo2:
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);