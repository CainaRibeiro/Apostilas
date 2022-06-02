const paragrafos = document.querySelector('.paragrafos'); //pega apenas 1, mas com o All pega todos os elementos como abaixo:
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // no caso queremos mudar o estilo do body, e fazemos isso através da função getComputedStyle, para pegar tudo que foi computado de CSS pelo navegador no body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps) {
    console.log(p);
    p.style.backgroundColor = backgroundColorBody; //para usarmos as propriedades CSS no JS, ao invés de traço, colocamos em camelCase;
    p.style.color = '#fff';
    // OU p.classList.add('corNova'); adicionando uma classe corNova no css
}