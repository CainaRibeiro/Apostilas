function relogio() {

    const relogio = document.querySelector('.relogio');
    // Não precisa mais pois estamos fazendo isso pelo document.addEventListener
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    //console.log(criaHoraDosSegundos(10));
    
    function iniciarRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function(e) {
    
        const elemento = e.target //e.target mostra qual elemento está sendo clicado
    
        if(elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    
        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }
    
        if(elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado');
        }
    });
    
    /* Ao invés de fazer pelo document.addEventListener, podemos fazer um por um como abaixo; pporém caso precise fazer de muitos botões pode ser inviável
    
    iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    });
    
    pausar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    zerar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    });
    */

}

relogio();


