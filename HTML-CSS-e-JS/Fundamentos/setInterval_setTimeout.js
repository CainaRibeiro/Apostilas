function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function funcaoInterval() {
    console.log(mostraHora());
}

//configura um intervalo de tempo para que uma função seja executada em determinado período de tempo
//setInterval(funcaoInterval, 1000) //no primeiro parâmetro foi passado a referência da função e não a execução da mesma, pois para passar a execução dela é preciso colocar os parênteses e o segundo é o tempo em milisegundos que a função será executada

//para não precisar passar a referência da função, é comum usarmos uma função anônima como abaixo. Assim como podemos passar ela para uma variável ou constante
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function () { //executa só uma vez dependendo do intervalo passado, que no caso foi 10000 milisegundos ou 10 segundos
    clearInterval(timer); //função para parar o intervalo passado
}, 3000);

//Outro exemplos com setTimeout()
setTimeout(function() {
    console.log('Olá mundo !');
}, 5000);