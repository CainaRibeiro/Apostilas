// Os arrays em JS são dinâmicos e heterogêneos (até porquê JS é fracamente tipada), ou seja, pode colocar valores de diferentes tipos dentro dele, assim como não tem um tamanho fixo, sendo assim, pode ter vários valores de vários tipos
//OBS: PREZAR PARA QUE CADA ARRAY TENHA UM TIPO DIFERENTE: BOA PRÁTICA DE PROGRAMAÇÃO PARA DEIXAR O CÓDIGO MAIS ORGANIZADO, MESMO QUE TENHAM VÁRIOS ARRAYS PARA CADA UM

const VALORES = [7.7, 8.9, 6, 2, 'Marcelo'];
// podemos usar assim também: const valores = new Array(7.7, 8.9, 6, 2, 'Marcelo');
console.log(VALORES);
console.log(VALORES[1], VALORES[4]);
console.log(VALORES[5]); //resultado: undefined, já que vai até o índice 4

VALORES[5] = 10; // adicionando no índice 5 o valor 10
console.log(VALORES);
console.log(VALORES.length);

VALORES.push({id: 3}, false, null, 'teste'); // o push é para adicionar valores ao array
// o que está em chaves é um objeto
console.log(VALORES);

VALORES.unshift('Luiza') // Adicionando no início do array

console.log(VALORES.pop()); // deletando o último valor, que no caso é o 'teste';
//o .shift remove do início (com essa função, os índices são sempre alterados para a ordem correta, mas caso use um delete.VALORES[indice], esse índice estará com o valor de undefined e os valores do array não serão reordenados)
delete VALORES[0];
console.log(VALORES);

console.log(VALORES.slice(0, -2)) // pode usar numeros positivos também, onde ele não será incluído, mas irá até ele (como se fosse a posição e não o índice)

console.log(typeof VALORES); // EM JS, um array é do tipo object
console.log(VALORES instanceof Array);

//PODEMOS USAR UM SPREAD, para que um array ou objeto possua o mesmo VALOR de um outro, e não o endereço da memória. Exemplo: a = [1, 2, 3]; b = [...a] //spread 
//Desse modo acima, não alterará o valor nos dois, caso mude em um deles, pois os VALORES foram copiados, e não o endereço de memória

const nome = 'Alberto, Sandra, Marcelo, Vanessa';
const nomes = nome.split(','); //caso não coloque o espaço, pode usar a função trim depois para remover os espaços das pontas
console.log(nomes);

const nomes2 = ['Luiz', 'Otávio', 'Miranda'];
const nome2 = nomes2.join(', ');  // unindo todos os valores de um array em uma string
console.log(nome2);

//CONCATENANDO ARRAYS
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); // assim como podemos passar apenas o a2

console.log(a3);
console.log();

//Outra maneira de concatenar: ...restOperation ou ...spreadOperation
const a4 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]; //usando o spread no array literal para ele juntar um no outro, e não aparecer um array dentro do array
console.log(a4);