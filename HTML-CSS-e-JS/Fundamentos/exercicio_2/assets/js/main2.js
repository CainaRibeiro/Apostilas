const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

function criaElemento(elemento) {
    return document.createElement(elemento);
}

for (let i = 0; i < elementos.length; i++) {
    let inclusao = document.querySelector('.container');
    let { tag, texto } = elementos[i];
    console.log(tag); // apenas para ver a tag no console, lembrar que não aparece no browser
    let tagCriada = criaElemento(tag);
    tagCriada.innerHTML = texto; //como só tem texto, poderíamos usar o innerText
    //poderíamos também usar um: let textoCriado = document.createTextNode(texto) e depois um appendChild(textoCriado) além do de baixo e colocarmos dentro de uma div fora do for também com um appendChild(div)
    inclusao.appendChild(tagCriada);
}