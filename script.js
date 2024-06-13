let resultado = document.getElementById('resultado')
let erroA = document.getElementById('erroA')
let erroB = document.getElementById('erroB')
let erroC = document.getElementById('erroC')

function calcular() {
    let numberA = document.getElementById('numberA').value
    let numberB = document.getElementById('numberB').value
    let numberC = document.getElementById('numberC').value

    // Limpa ou atualiza as mensagens de erro conforme o uso do usuário
    erroA.innerHTML = ''
    erroB.innerHTML = ''
    erroC.innerHTML = ''
    
    // Verifica se os valores digitados não são vazios
    let erroValor = false
    if (numberA === '') {
        erroA.innerHTML = 'Este valor precisa ser preenchido!'
        erroValor = true
    }

    if (numberB === '') {
        erroB.innerHTML = 'Este valor precisa ser preenchido!'
        erroValor = true
    }

    if (numberC === '') {
        erroC.innerHTML = 'Este valor precisa ser preenchido!'
        erroValor = true
    }

    // Verifica se os valores digitados são números 
    if (!erroValor) {
        if (isNaN(numberA)) {
            erroA.innerHTML = 'Este valor precisa ser um número!'
            erroValor = true
        }

        if (isNaN(numberB)) {
            erroB.innerHTML = 'Este valor precisa ser um número!'
            erroValor = true
        }

        if (isNaN(numberC)) {
            erroC.innerHTML = 'Este valor precisa ser um número!'
            erroValor = true
        }
    }

    if (erroValor) {
        return
    }
    
    // Converte os valores para números após as verificações
    numberA = Number(numberA)
    numberB = Number(numberB)
    numberC = Number(numberC)
    
    // Verifica se o primeiro número é zero
    if (numberA === 0) {
        erroA.innerHTML = 'O primeiro valor não pode ser zero!'
        return
    }

    let resultadoCalculo = (numberB * numberC) / numberA

    resultado.innerHTML = resultadoCalculo.toFixed(2)
}