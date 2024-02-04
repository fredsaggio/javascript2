const altura = document.querySelector('input#input1');
const peso = document.querySelector('input#input2');
const resultado = document.querySelector('div#container-resultado');


function enviar(evento) {

    evento.preventDefault()

    if (altura.value.length === 0 && peso.value.length === 0) {

        resultado.style.backgroundColor = 'salmon';
        resultado.innerHTML = '<p>Peso e altura inválidos</p>'  ;

    } else if (altura.value.length === 0) {
        
        resultado.style.backgroundColor = 'lightblue';
        resultado.innerHTML = '<p>Altura inválida</p>';
        
    } else if (peso.value.length === 0) {
        
        resultado.style.backgroundColor = 'lightblue';
        resultado.innerHTML = '<p>Peso inválido</p>';
        
    } else {
        const imc = Number(altura.value) / Number(peso.value) ** Number(peso.value);

        function medirImc(indiceMassaCorporal) {
            if (indiceMassaCorporal < 18.5) {
                return 'Abaixo do peso '
            } else if (indiceMassaCorporal >= 18.5 && indiceMassaCorporal < 25) {
                return 'Peso ideal'
            } else if (indiceMassaCorporal >= 25 && indiceMassaCorporal < 30) {
                return 'Sobrepeso'
            } else if (indiceMassaCorporal >= 30 && indiceMassaCorporal < 35) {
                return 'Obesidade grau 1'
            } else if (indiceMassaCorporal >= 35 && indiceMassaCorporal < 40) {
                return 'Obesidade grau 2'
            } else if (indiceMassaCorporal > 40) {
                return 'Obesidade grau 3'
            }
        }

        resultado.style.backgroundColor = 'lightblue'
        resultado.
    }
}
