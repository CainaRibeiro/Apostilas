// Para fugir do escopo global, utilizamos funções:
function meuEscopo() {
    const form = document.querySelector('.form'); // para selecionar elementos como selecionassemos classes, seletores, nomes, id, tags ou atributos css por exemplo
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

   //form.onsubmit = function (evento) {
    //    evento.preventDefault()
    //    alert(1)
    //    console.log('Foi enviado')
   // }

   //Forma mais moderna de usar como acima:
    function recebeEventoForm(evento){
        evento.preventDefault(); // para prevenir um evento padrão, que no caso é o envio do formulário (submit) 

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(
            {
                nome: nome.value, // para pegar o valor
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            }
        );

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`

    }

   form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();