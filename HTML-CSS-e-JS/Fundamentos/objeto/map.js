const pessoas = [
    { id:3, nome: 'Luiz' },
    { id:2, nome: 'Maria' },
    { id:1, nome: 'Helena' }
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

//Usando map para a ordem ser igual
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa}); //primeiro argumento: chave (pode ser qualquer nome); segundo arg.: valor que será colocado no map
}

console.log(novasPessoas);
console.log(novasPessoas.get(3));

for(const [identificador, {id, nome}] of novasPessoas) { //podemos usar em JS desse jeito, mas quando temos muitos dados, é melhor usarmos o objeto completo, ou seja, ao invés de ser como está depois do const, passar o 'pessoas' que é o objeto completo //podemos pegar só as chaves com o novasPessoas.keys(), ou os valores com o novasPessoas.values()
    console.log(identificador, id, nome);
}

//Podemos usar o delete também como abaixo
// novasPessoas.delete(2);
// console.log(novasPessoas);