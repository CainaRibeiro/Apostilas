const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { //13 corresponde ao enter
        if(!inputTarefa.value) {
            return;
        }
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); //foco do input
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar') // mais completo que o classList
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innertText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) {
        return;
    }
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e) {
    const elemento = e.target;
    
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove(); //remove o pai do elemento que contém a classe apagar
        salvarTarefas(); // para que seja salvo no localStorage
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //o trim serve para remover os espaços das pontas da string
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); //criando uma string do array convertido para JSON que pode ser convertido para array posteriormente
    //localStorage: lugar no navegador que pode servir para guardar informações
    localStorage.setItem('tarefas', tarefasJSON) // só pode salvar strings, por isso tivemos q converter antes e o 'tarefas' é o nome do arquivo
    console.log(listaDeTarefas)
}

function adicionaTarefasSalvas() { 
    const tarefas = localStorage.getItem('tarefas'); // para carregar o arquivo "tarefas" quando o site for aberto novamente
    const listaDeTarefas = JSON.parse(tarefas) // para converter de string para array
    
    
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); // para criar as tarefas de volta a partir do arquivo "tarefas" do localStorage
    }
}

adicionaTarefasSalvas();