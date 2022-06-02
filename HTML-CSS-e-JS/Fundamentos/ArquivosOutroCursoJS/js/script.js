const numero = Number(prompt('Digite o seu número:'));
const numeroTitulo = document.getElementById('numero_titulo');
const textoSubst = getElementById('texto');

const raizQuad = numero * (1/2);
const numeroEInt = Number.isInteger(numero);
const numeroENaN = false; // Number.isNaN(numero)

if(raizQuad == NaN){
    numeroENaN = true;
}

textoSubst.innerHTML = `<p>Raiz quadrada: ${raizQuad}</p>
<p>${numero} é inteiro ? ${numeroEInt}</p>
<p>É NaN ? ${numeroENaN}</p>
<p>Arredondando para baixo: ${Math.floor(numero)}</p>
<p>Arredondando para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`

numeroTitulo.innerHTML = numero;
//textoSubst = innerHTML