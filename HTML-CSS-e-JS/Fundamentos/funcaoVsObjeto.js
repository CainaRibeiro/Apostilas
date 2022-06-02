console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function(){};
console.log(typeof Cliente);
console.log(typeof new Cliente);;

class Produto {};
console.log(typeof Produto);
console.log(typeof new Produto());

//Em JS existe um termo usado para definir algumas delas como função construtora, e será visto mais a frente
// Acho que a função construtora é essa abaixo:
function Obj(nome) {
    this.nome = nome; //pode colocar apenas nome, já que tem o mesmo "nome", tanto o atributo do objeto quanto o parâmetro
    this.exec = function() {
        console.log('Exec...');
    }
    //pode colocar apenas o nome da função, ao invés da palavra function também. Ex: fala() { código }
}

const obj2 = new Obj('Cadeira'); //podemos colocar apenas new Object e atribuirmos atributos e seus valores pelo ponto. ex:  const pessoa = new Obj(); pessoa.nome = 'Marcelo';
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();

//PODEMOS USAR UM SPREAD, para que um array ou objeto possua o mesmo VALOR de um outro, e não o endereço da memória. Exemplo: a = [1, 2, 3]; b = [...a] //spread 
//Desse modo acima, não alterará o valor nos dois, caso mude em um deles, pois os VALORES foram copiados, e não o endereço de memória