const altura = document.querySelector('input#input1');
const peso = document.querySelector('input#input2');
const resultado = document.querySelector('div#container-resultado');


function enviar() {

    if (altura.value.length === 0 && peso.value.length === 0) {

        resultado.style.backgroundColor = 'salmon'
        resultado.innerHTML = '<p>Peso e altura inválidos</p>'  

    } else if (altura.value.length === 0) {

        resultado.style.backgroundColor = 'lightblue'
        resultado.innerHTML = '<p>Altura inválida</p>'

    } else if (peso.value.length === 0) {

        resultado.style.backgroundColor = 'lightblue'
        resultado.innerHTML = '<p>Peso inválido</p>'

    } else {
        const imc = Number(altura.value) / Number(peso.value) ** Number(peso.value)
        
    }

}