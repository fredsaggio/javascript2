function allScope() {

    const altura = document.querySelector('input#input1')
    const peso = document.querySelector('input#input2')
    const resultado = document.querySelector('div#container-resultado')

}

function enviar() {

    const altura = document.querySelector('input#input1')
    const peso = document.querySelector('input#input2')
    const resultado = document.querySelector('div#container-resultado')

    if (altura.value.length === 0 || peso.value.length === 0) {
        resultado.style.backgroundColor = 'red'
        resultado.innerHTML = 'Resultado inválido!'
    }
}

