function teste() {
    console.log('Este é o meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() {
        this.volume += 2;
    }

    //Método de instância
    diminuirVolume( ) {
        this.volumen -= 2;
    }

    //Método estático: não é criada nenhuma instância, é referente a classe, logo os atributos serão undefined
    static soma(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 4));
//console.log(Math.random()); //Exemplo de método estático