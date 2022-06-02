//Não precisa colocar ponto e vírgula
console.log("Sentença de código");

//Em JavaScript pode colocar apenas chaves para separar blocos de código. Exemplo:
{
    {
        console.log("Olá");
        console.log('Mundo!');
    }
};

// VARIÁVEIS E CONSTANTES:
var a = 3; //Forma mais antiga de declarar variáveis e que pode declarar novamente;
let outraVariavel = 4; //Forma mais moderna de criar variáveis;

a = 30.4;
b = 5;

console.log(a, b) // imprime com espaço, já com o +, devemos coloca-lo

//Muito usado no paradígma funcional, onde usamos let mais quando realmente precisamos mudar o valor do dado
const C = 50; //não da para atribuir outro valor a constante durante o código
// preferível usar constante para que não precise mudar o valor do dado durante o código;

console.log(C); //já quebra linha por padrão

let qualquer = "Palavra";
//Para saber qual o tipo da variável:
console.log(typeof qualquer);

//Formas de declarar um number
const PESO_1 = 1.0;
const PESO_2 = Number('2.2'); //Talvez seja aquilo sobre Wrapper Class do Java;;

console.log(PESO_1, PESO_2);
console.log(Number.isInteger(PESO_1));
console.log(Number.isInteger(PESO_2));

// podemos comparar assim: if(typeof variavel !== 'number') { return ... }

//Da para converter uma string usando Number e parse
//Exemplos: parseInt(string), parseFloat(string), OU
//Usando number: Number(string)

const PROVA_1 = 9.871;
const PROVA_2 = 6.871;

const TOTAL = PROVA_1 * PESO_1 + PROVA_2 * PESO_2;
const MEDIA = TOTAL / (PESO_1 + PESO_2);

// EXISTE A POTENCIAÇÃO USANDO 2 ASTERÍSTICOS. EX:
// console.log(2 ** 10) // 2 elevado a 10
// A potenciação tem precedência maior do que a multiplicação, divisão e resto, só fica atrás dos parenteses

console.log(MEDIA.toFixed(2));; // Coloca apenas 2  casas decimais
console.log(MEDIA.toString()); // converte em string
console.log(MEDIA.toString(2)); // Converte em binário;
console.log(typeof MEDIA, MEDIA);
console.log(typeof Number)

//OBSERVAÇÕES:
console.log(7 / 0); // quando acontece isso, o JS  tem um tipo chamado Infinity, onde é mostrado no print (console ou no html)
console.log("10" / 2); // o JS consegue identificar se tem um número na string passada e realiza a conta;
console.log("3" + 2); // nesse caso, a string tem preferência, então será mostrado 32
console.log("Show !" * 2); // o JS identificará que não há um número na string;
console.log(0.1 + 0.7) // a precisão do JS não é tão grande e ele não suporta ela, então deve-se tomar cuidado e caso necessário, usar como abaixo:
console.log((10.345).toFixed(2)); // OU, como abaixo:
let varTeste = 0.79999;
console.log(varTeste.toFixed(2));

const RAIO = 5.6;
const AREA = Math.PI * Math.pow(RAIO, 2);

console.log(AREA);
console.log(typeof Math);

//String
const ESCOLA = 'coder';

console.log(ESCOLA.charAt(4));
console.log(ESCOLA.charAt(5)); // não da erro, apenas mostra um campo vazio
console.log(ESCOLA.charCodeAt(3)); // retorna o valor da tabela ASC
console.log(ESCOLA.indexOf('3')); // Senão existir, retornará -1, caso exista, retornará o índice
console.log(ESCOLA.substring(1)); // a partir do índice 1
console.log(ESCOLA.substring(0, 3)); // a partir do índice 0 até o indice 2
console.log('Escola'.concat(ESCOLA).concat('!')); // Concatenando uma string com a variável e dps outra string
console.log('Escola ' + ESCOLA + ' - Udemy'); // ou usando o +
console.log(ESCOLA.replace('e', 3)); // ou console.log(ESCOLA(/\3/, 'e')), para pegar todos os caracteres '3' e colocar o e;
console.log('Ana, Maria, Pedro'.split(', ')); // separa cada elemento em uma índice de array // ao invés do split, podemos usar o regex

//TEMPLATE STRING
const NOME = 'Rebeca';

//Ao invés de usar como abaixo, podemos usar o símbolo da crase para concatenar strings e variáveis ou constantes
const CONCATENACAO = 'Olá' + NOME + '!';

//Exemplo:
const TEMPLATE = `
    Olá
    ${NOME}!
`

console.log(CONCATENACAO, TEMPLATE);

//expressões:
console.log(` 1 + 1 = ${1+1}`);

const UP = texto => texto.toUpperCase();
console.log(`Ei... ${UP('cuidado')} ! `);

// BOOLEANO
//No JavaScript, aceita tanto o true e false, mas também o 1, 0 e outras coisas, exemplo:
let isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo);
console.log(!!isAtivo); //serve para saber se a variável é verdadeira ou falsa, pois se fosse apenas o isAtivo, mostraria o valor da variável 

//CONVERTENDO SE É VERDADEIRO OU FALSO. Exemplo:
console.log('Os resultados verdadeiros: ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo == true));

console.log('Os resultados falsos: ');
console.log(!!0);
console.log(!!''); //Pode ser usado por exemplo para saber se algo esta preenchido ou não;
console.log(!!null);
console.log(!!NaN); // NaN = not a number;
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar:');
console.log(!!('' || null || 0 || ' '));

console.log('Exemplo: ');
let nome;

console.log(nome || 'Desconhecido');

