function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia: function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            //a função eval está sendo usada apenas para treinar as funções fábricas, porém traz falhas de segurança com ela, onde o JS vai tentar executar o que for passado a ela.
            let conta = this.display.value;
            
            try{
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            // this = calculadora
            // abaixo o this muda para o document, onde usamos o .bind para voltar a ser a calculadora
            document.addEventListener('click', e => { //a arrow function não permite a alteração do this
                const elemento = e.target;

                if(elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if(elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }) //usando o .bind(this) depois do colchete, faz com que o this seja o anterior (calculadora), porém caso use uma arrow function, não precisa
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();