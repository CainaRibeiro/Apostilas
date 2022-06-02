function tratarErroELancar(erro){
    //throw new Error('...') // Poderia colocar uma mensagem ou fazer algum procedimento
    //throw 10 // pode lançar um número se quiser
    //throw false // pode lançar um boolean
    //throw 'mensagem' // pode lançar uma mensagem
    // o throw é usado para lançar (/tratar é mais interessante do que mostrar o erro tão técnico ao usuário) um erro e mostrar ele // ele não precisa do try nem do catch, pode ser usado sozinho
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // o 'e' é o erro
        tratarErroELancar(e) // passando o erro como parâmetro para a função
    } finally { // Mesmo que ocorra erro ou não, será executado o que está no finally
        console.log('final')
    }
}

const obj = { nome:'Roberto' }
imprimirNomeGritando(obj)