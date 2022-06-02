//Valida CPF
/*
CPF: 705.484.450-52 e 0770.987.720-03

7  0  5  4  8  4  4  5  0
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o número do dígito for maior que 9, consideraremos 0

7  0  5  4  8  4  4  5  0  5
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (segundo dígito)
Se o número do dígio for maior que 9, consideraremos 0
*/

class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            wriable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    ehSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) { //como não utilizamos a palavra this em nenhum momento, não precisamos de nada da instância, o que possibilita usarmos como um método estático
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            // console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) {
            return false;
        }
        if(typeof this.cpfLimpo !== 'string') {
            return false;
        }
        if(this.cpfLimpo.length !== 11) {
            return false;
        }
        if(this.ehSequencia()) {
            return false;
        }
        this.geraNovoCpf()
        console.log(this.novoCpf)

        return this.novoCpf === this.cpfLimpo;
    }
}

let validaCpf = new ValidaCpf('070.987.720-03');
// validaCpf = new ValidaCpf('999.999.999-99');

if(validaCpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido')
}