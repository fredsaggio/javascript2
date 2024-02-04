function enviar() {

    const altura = document.querySelector('input#input1')
    const peso = document.querySelector('input#input2')
    const resultado = document.querySelector('div#container-resultado')

    if (altura.value.length === 0 || altura.value.typeof !== Number && peso.value.length === 0 || peso.value.typeof !== Number){
        resultado.style.backgroundColor = 'salmon'
        resultado.innerHTML = '<p>Peso e altura inválidos</p>'

    } else if (altura.value.length === 0 || altura.value.typeof !== Number) {
        resultado.style.backgroundColor = 'salmon'
        resultado.innerHTML = '<p>Altura inválida</p>'
    } else if (peso.value.length === 0 || peso.value.typeof !== Number) {
        resultado.style.backgroundColor = 'salmon' 
        resultado.innerHTML = '<p>Peso inválido</p>'
    }

}