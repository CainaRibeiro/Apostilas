let umaString = 'Um texto qualquer'; // lembrar de C, onde pode mostrar as aspas dupas com a barra invertida: \"mostrando as aspas\", assim como \t, \\ e outras

console.log(umaString[4]); // mostra o 5º caracter, pois começa pelo 0
console.log(umaString[-1]); //retorna undefined
console.log(umaString.charAt(6)); // mostra o índice 6
console.log(umaString.concat(' em um lindo dia'))
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('texto')); //retorna um índice de onde começa a string ou de onde está o caracter. Caso não ache, retornará -1

console.log(umaString.indexOf('Um', 3));
console.log(umaString.indexOf('o', 3));

console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));

//Expressão regular:
console.log(umaString.match(/[a-z]/))
console.log(umaString.match(/[a-z]/g))

console.log(umaString.search(/x/))

console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString.replace(/t/g, '#'))

console.log(umaString.slice(2, 6));
console.log(umaString.slice(-3)); // 3 de trás para frente
console.log(umaString.slice(5)); // a partir do 5º índice

console.log(umaString.slice(-3, -1)) // cada parâmetro pode ser substituído por: umaString.length - valor

console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' '))
console.log(umaString.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
