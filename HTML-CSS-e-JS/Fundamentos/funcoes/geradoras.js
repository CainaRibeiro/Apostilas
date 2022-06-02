// Função geradora: pausa o código em determinado local

function* geradora1() {
    // Código qualquer...
    yield 'Valor 1' //similar ao return
    // Código qualquer...
    yield 'Valor 2' // próxima vez que a função será chamada será retornado o segundo valor, e da próxima o terceiro e assim por diante
    // Código qualquer...
    yield 'Valor 3'
}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next()); // done:false quer dizer que não acabou; e true q sim

for(let valor of  g1) {
    console.log(valor);
}

function*  geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log();

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    return function() {
        console.log('Vim do return') // para o código
    }

    // .. mais código

    yield function () {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3(); // dará um erro porquê parou no return