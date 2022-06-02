function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        //document.addEventListener('click') substituído no capturaCliques()
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 13) {
                this.realizaConta();
            }
        })
    }
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;
            if(elemento.classList.contains('btn-num')) {
                this.addNumeroDisplay(elemento);
            }
            if(elemento.classList.contains('btn-clear')) {
                this.clear();
            }
            if(elemento.classList.contains('btn-del')) {
                this.del(elemento);
            }
            if(elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
    }

    this.addNumeroDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus(); //para resolver o bug e colocar o foco no display
    }

    this.clear = () => this.display.value =  '';

    this.del = function() {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return
            }

            this.display.value = conta
        } catch(e) {
            alert('Cona inválida');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
