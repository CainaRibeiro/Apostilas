
//const resultado = document.querySelector('#resultado'); // para obter o que tem no id resultado
//resultado.innerHTML = '';
//const p = document.createElement('p')
//p.classList.add('classe');  //inserir no elemento p uma lista de classe(s)
//p.innerHTML = msg;
//resultado.appendChild(p);

//form.addEventListener('submit', function (e) { e.preventDefault(); e.target.querySelector(#,., tag ou outras coisas); })

//Number(inputAltura.value) //pega o valor do inputAltura e converte em um number

// Primeiro coisa é parar o envio do formulário capturando o evento de submit dele
const form = document.querySelector('#formulario'); // para obter o id formulario

form.addEventListener('submit', function (e) { // "e" de event ou evento
    e.preventDefault(); // para previnir o evento padrão
    const inputPeso = e.target.querySelector('#peso'); //para pegar o peso do html
    const inputAltura = e.target.querySelector('#altura'); //para pegar a altura do html
    
    const peso = Number(inputPeso.value); //convertendo para number
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const  msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);

})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) {
        return nivel[5];
    } 
    if(imc >=34.9) {
        return nivel[4];
    }
    if(imc >= 29.9) {
        return nivel[3];
    }
    if(imc >= 24.9) {
        return nivel[2];
    }
    if(imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(className) {
    const p = document.createElement('p'); //cria um elemento html
    //p.classList.add(className); //adicionando uma classe na lista de classes do parágrafo, caso não exista nenhuma
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // para obter o id resultado
    resultado.innerHTML = '';
    //resultado.appendChild(p); //inserir um "filho" no elemento resultado

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');  //inserir no elemento p uma lista de classe(s)
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}