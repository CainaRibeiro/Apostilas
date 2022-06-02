//OBS: O for in não é tão interessante para percorrer arrays, mas para objetos sim

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){ //importante usar o let para não criar variáveis globais
    console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

for(let atributo in pessoa){ //usando o for in para objeto é muito mais interessante do que para arrays
    console.log(`${atributo} = ${pessoa[atributo]}`)
}