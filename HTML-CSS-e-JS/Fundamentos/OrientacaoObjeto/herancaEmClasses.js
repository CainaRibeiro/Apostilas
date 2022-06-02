class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado')
            return;
        }

        this.ligado = false;
    }
};

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
console.log(d1);
d1.desligar();
d1.desligar();

class Smartphone extends DispositivoEletronico { //Herança
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Alterando o método ligar.')
    }

    //Podemos criar outros métodos específicos para cada classe também.
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
t1.ligar();