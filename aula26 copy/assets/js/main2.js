function allScope(){

    const form = document.getElementById('formzinho');
    
    form.addEventListener('submit', function enviar(event) {
        event.preventDefault();
        textoResultado();

        const inputaltura = document.getElementById('input1') // "target" está selecionando o "form".
        const inputpeso = document.getElementById('input2') 
        const peso = Number(inputpeso.value);
        const altura = Number(inputaltura.value);

        if (!peso) {
            textoResultado('Peso inválido'.addClass('Peso inválido'), false);
            return;
        }

        if (!altura) {
            textoResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura)
        const medindoImc = medirImc(imc)

        textoResultado(`Seu imc é igual a ${imc} (${medindoImc})`, true)

        console.log(imc)
        console.log(medindoImc)

        
    });
    
    function textoResultado(msg, isValid) {

        const resultado = document.getElementById('container-resultado');
        resultado.innerHTML = '';

        const p = criarP();
        p.innerHTML = msg;
        resultado.appendChild(p)


    }

    function addClass(additemhere, addclasshere) {
        return additemhere.classList.add(addclasshere)
    }

    function criarP() {

        const p = document.createElement('p');
        return p;
    }
    
    function getImc(peso, altura) {
        const imc = peso / altura ** 2 
        return imc
    }

    function medirImc(imc) {

        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso ideal'
        } else if (imc >= 25 && imc < 30) {
            return 'Sobrepeso'
        } else if (imc >= 30 && imc < 35) {
            return 'Obesidade grau 1'
        } else if (imc >= 35 && imc < 40) {
            return 'Obesidade grau 2'
        } else if (imc >= 40) {
            return 'Obesidade grau 3'
        }
    }
}

allScope();


    /* function textoResultado(msg) {
        const resultado = document.getElementById('container-resultado');
        resultado.innerHTML = `<p class="paragrafo-teste">${msg}</p>`; */