let resultado = document.getElementById('resultado')
let mensagemErro = document.getElementById('mensagemErro')

function calcular() {
    let numberA = Number(document.getElementById('numberA').value)
    let numberB = Number(document.getElementById('numberB').value)
    let numberC = Number(document.getElementById('numberC').value)

    // Limpa ou atualiza as mensagens de erro conforme o uso do usuário
    mensagemErro.innerHTML = ''
    
    // Verifica se o primeiro número é zero
    if(numberA === 0) {
        mensagemErro.innerHTML += 'O primeiro valor não pode ser zero!'
        return
    }

    // Verifica se os valores digitados são números 
    if (isNaN(numberA) || isNaN(numberB) || isNaN(numberC)) {
        mensagemErro.innerHTML = 'Os valores digitados precisam ser números!'
        return
    }

    let resultadoCalculo = (numberB * numberC) / numberA

    resultado.innerHTML = resultadoCalculo.toFixed(2)
}