//continuação das anotações de JS

let a = 3;
global.b = 123
this.c = 456
this.d = 98
this.e = 99

console.log(this.a) //undefined
console.log(global.a) //global é equivalente ao window do browser
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // igual a this, onde irá exportar para fora do arquivo //cada arquivo é um módulo
console.log(module.exports)

//MAIS USUAL (ao invés de usar o this): module.exports = { c: 456, d: 98, e: 99 }

//Criando uma variável maluca (sem var e let) // NÃO FAZER, POIS CRIA UMA VARIÁVEL GLOBAL E PODE SUBSTITUIR ALGUMA OUTRA GLOBAL (FUGIR DE VARIÁVEIS GLOBAIS)
abc = 3
console.log(global.abc)

//OBS: cada arquivo é um módulo, o que difere de web, onde todos os arquivos estão "disputando" no escopo global