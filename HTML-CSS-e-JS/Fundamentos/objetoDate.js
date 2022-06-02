const tresHoras = 60 * 60 * 3 * 1000; //três horas (o 1000 é porquê são os milisegundos)
const umDia = 60 * 60 * 24 * 1000; // um dia
const data = new Date(2019, 3, 20, 15, 14, 27); //instanciando um objeto a partir de uma função construtora (esse tipo de função começa com letra maiúscula) //Date(0) = 0 milésimos de segundos é o começo da época unity, ou seja: 01/01/1970 (aparece diferente por causa do timezone configurado do notebook) // new Date(2019, 3, 20, 15, 14, 27, 999) = 3 de abril (começa do 0 e vai até o 11, por isso abril é 3) de 2019 às 15:14:27:999 (27 segundos e 999 milésimos) obs: depois do mês pode omitir tudo a direita

console.log(data.toString()); //converte para string

const data2 = new Date('2019-04-20 20:15:59'); //datestring OBS: pode colocar ou não um T entre a data e a hora, ou colocar apenas os milésimos de segundos
console.log('Dia', data2.getDate()); //retorna o número do dia
console.log('Mês', data2.getMonth() + 1); //em JS começa do zero, então colocar + 1 para retornar o correto
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('Seg', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('Dia da semana', data2.getDay()); // 0 é considerado domingo é 6 é sábado

console.log(Date.now()); //milésimos de segundos desde 1 de janeiro de 1970 até hoje

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);