alert(1);

const date = new Date();
const diaSemana = date.getDay();
const diaMes = date.getDate();
const mes = date.getMonth();
const ano = date.getFullYear();
const hora = date.getHours();
const min = date.getMinutes();
const seg = date.getSeconds();

diaSemana = diaSemanaFuncao(diaSemana);
mes = nomeMes(mes);

const resultado = document.querySelector('.container');

const p = document.createElement('p');
p.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano} às ${hora}:${min}:${seg}`;

resultado.appendChild(p);

function diaSemanaFuncao(diaSemana){
    const diaSemana2;
    
    switch(diaSemana) {
        case 0:
            diaSemana2 = 'Domingo';
            break;
        case 1:
            diaSemana2 = 'Segunda';
            break;
        case 2:
            diaSemana2 = 'Terça';
            break;
        case 3:
            diaSemana2 = 'Quarta';
            break;
        case 4:
            diaSemana2 = 'Quinta';
            break;
        case 5:
            diaSemana2 = 'Sexta';
            break;
        case 6:
            diaSemana2 = 'Sábado';
            break;
        default:
            diaSemana2 = 'Dia inválido';
    }

    return diaSemana2;
}

function nomeMes(numeroMes){
    const nomeMes;
    
    switch(numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            break;
        case 1:
            nomeMes = 'Fevereiro';
            break;
        case 2:
            nomeMes = 'Março';
            break;
        case 3:
            nomeMes = 'Abril';
            break;
        case 4:
            nomeMes = 'Maio';
            break;
        case 5:
            nomeMes = 'Junho';
            break;
        case 6:
            nomeMes = 'Julho';
            break;
        case 7:
            nomeMes = 'Agosto';
            break;
        case 8:
            nomeMes = 'Setembro';
            break;
        case 9:
            nomeMes = 'Outubro';
            break;
        case 10:
            nomeMes = 'Novembro';
            break;
        case 11:
            nomeMes = 'Dezembro';
            break;
            
        default:
            nomeMes = 'Mês inválido';
    }

    return nomeMes;
}

/* OUTRA FORMA DE FAZER:
const resultado = document.querySelector('.container1);
const data = new Date();
resultado.innerHTML = data.toLocaleDateString('pt-BR', { dataStyle: 'full', timeStyle: 'short' });
//ou colocando um objeto como segundo parâmetro:
*/