// JS é uma linguagem multiparadígma, ou seja, podemos programar em JS como procedural, funcional ou orientado a objetos
// JSON (JavaScript Object Notation) é diferente de Objeto, JSON é uma notação

/* OBSERVAÇÕES SOBRE OBJ -> também tem mais em factory functions e funções construtoras
- podemos usar o delete objeto1.nome para deletar a chave nome do objeto1
- atribuir funções: objeto1.getDataNascimento = function() { 
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
*/

const prod1 = {}; // definindo um objeto 
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
//Outra forma de adicionar nome de identificadores (pode usar um espaço, mas EVITAR)
//interessante caso queiramos colocar um valor dinâmico (caso venha de algum lugar por exemplo): const chave; prod1[chave];
prod1['desconto_legal'] = 0.490;

console.log(prod1);

//Outra forma de decalarar objetos em JS
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: { //posso colocar um objeto como chave e aninhar eles, como está acontencendo com esse obj dentro de prod2
        blabla: 1,
        obj: { // o nome tem que ser único, mas esse 'obj' está dentro do 'obj', então não tem problema, apenas se eles estivessem no msm bloco de código e não dentro do outro como está.
            blabla: 2
        }
    }
}

console.log(prod2);

// DIFERENÇA PARA JSON (notação literal de objetos usado para interoperabilidade(comunicação) entre sistemas)
'{ "nome": "Camisa Polo", "preco": 79.90 }'

//PODEMOS USAR UM SPREAD, para que um array ou objeto possua o mesmo VALOR de um outro, e não o endereço da memória. Exemplo: a = [1, 2, 3]; b = [...a] //spread 
//Desse modo acima, não alterará o valor nos dois, caso mude em um deles, pois os VALORES foram copiados, e não o endereço de memória
