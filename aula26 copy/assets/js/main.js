function AllScope(){

    const form = document.querySelector('form#formzinho');
    const altura = document.querySelector('input#input1');
    const peso = document.querySelector('input#input2');
    const resultado = document.querySelector('div#container-resultado');
    const armazenamento = []

    function enviar(e) {

        const imc = Number(peso.value) / (Number(altura.value) ** 2);

        e.preventDefault();

        if (altura.value.length > 4 || peso.value.length > 7) {
            
            resultado.style.backgroundColor = '#FC7388';
            resultado.innerHTML = '<p>Peso e/ou altura inválido(s)</p>';

        }  else {

            function medirimc(indiceMassaCorporal) {
                if (indiceMassaCorporal < 18.5) {
                    return 'Abaixo do peso ';
                } else if (indiceMassaCorporal >= 18.5 && indiceMassaCorporal < 25) {
                    return 'Peso ideal';
                } else if (indiceMassaCorporal >= 25 && indiceMassaCorporal < 30) {
                    return 'Sobrepeso';
                } else if (indiceMassaCorporal >= 30 && indiceMassaCorporal < 35) {
                    return 'Obesidade grau 1';
                } else if (indiceMassaCorporal >= 35 && indiceMassaCorporal < 40) { 
                    return 'Obesidade grau 2';
                } else if (indiceMassaCorporal > 40) {
                    return 'Obesidade grau 3';
                }
            };

            resultado.style.backgroundColor = '#01FEC3';
            resultado.innerHTML = `<p>Seu IMC é igual a ${imc.toFixed(2)} (${medirimc(imc)})</p>`;

        };
        armazenamento.push({imc: imc.toFixed(2), valor: medirimc(imc)})
        console.log(armazenamento)
    };

    form.addEventListener('submit', enviar);
};

AllScope();