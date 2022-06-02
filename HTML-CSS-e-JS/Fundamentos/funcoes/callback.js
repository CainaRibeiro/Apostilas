
// Simulando algo que não temos controle do tempo que será executado

function rand(min=1000, max=3000) {
    const numero = Math.random() *  (max - min) + min;
    return Math.floor(numero);
}

function f1(callback){ //pode passar ou não uma função como parâmetro, caso passe executará o que está no if, caso não passe apenas executará a função
    setTimeout(function()  {
        console.log('f1');
        if(callback) {
            callback();
        }
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) {
            callback();
        }
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) {
            callback();
        }
    }, rand())
}

//Callback
f1(function() { // para que a função f2 seja executada depois da f1
    f2(function() {
        f3(function() {
            console.log('Olá mundo!');
        });
    });
});

/* Melhorando o callback abaixo:
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo !');
}
*/