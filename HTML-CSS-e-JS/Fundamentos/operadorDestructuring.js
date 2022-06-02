//Recurso após o ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Destructuring
const { nome, idade, ...resto } = pessoa; // para tirar de dentro do objeto, os atributos nome e idade
console.log(nome, idade, resto);

const { nome: n, idade: i } = pessoa; // o 'n' e o 'i' são variáveis que receberão o que está dentro dos atributos nome e idade do objeto pessoa
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; //atribuindo um valor padrão
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep }, endereco } = pessoa;
console.log(logradouro, numero, cep, endereco);

// const { conta: { ag, num } } = pessoa; // dará um erro pois não existe o atributo conta e nem o ag e num

//Destructuring em ARRAY
const [a] = [10];
console.log(a);

const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // notação de difícil leitura
//retornará o valor 6, já que ele lerá o segundo array e posteriormente o seu segundo elemento
console.log(nota);

function rand( { min=0, max=1000 } ) { //retornará um numero aleatório mas dentro de um operador destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

//Destructuring OBJ
const obj = {max: 50, min: 40}
console.log(rand({obj}))
console.log(rand({max: 50}))
console.log(rand({min: 955}))
console.log(rand({}))
// console.log(rand()) //dará um problema porque tentará desestruturar algo que está undefined ou nulo

//Destructuring ARRAY
function rand2([min2=0, max2=1000]){ //atribuindo valores padrões, então não da um erro por um deles não serem undefined
    if(min2 > max2){
        [min2, max2] = [max2, min2]
    }
    const valor = Math.random() * (max2 - min2) + min2
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand2()) //não está passando um array, logo o mesmo será undefined (indefinido)

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto2] = numeros; // atribui o primeiro índice ao primeiroNumero, o segundo ao segundoNumero e o resto ao resto (...nomeVariavel = restOperation ou spread, muda apenas o contexto)
console.log(primeiroNumero, segundoNumero);
console.log(resto2);

const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[1][2]); //numero 6 do array