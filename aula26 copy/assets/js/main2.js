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
            textoResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            textoResultado('Altura inválida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const medindoImc = medirImc(imc);
        const msg = `Seu imc é igual a ${imc} (${medindoImc})`

        textoResultado(msg, true);

        console.log(imc);
        console.log(medindoImc); 
    });
    
    function textoResultado(msg, isValid) {

        const resultado = document.getElementById('container-resultado');
        resultado.innerHTML = '';

        const p = criarP();
        p.innerHTML = msg;
        resultado.appendChild(p);

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        }
        else {
            p.classList.add('paragrafo-false')
        } 

    }

    function criarP() {

        const p = document.createElement('p');
        return p;
    }
    
    function getImc(peso, altura) {
        const imc = peso / altura ** 2 ;
        return imc;
    }

    function medirImc(imc) {

        const nivel = ['Abaixo do peso', 'Peso ideal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 40) return nivel[5];
        if (imc >= 35) return nivel[4];
        if (imc >= 30) return nivel[3];
        if (imc >= 25) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
}

allScope();


    /* function textoResultado(msg) {
        const resultado = document.getElementById('container-resultado');
        resultado.innerHTML = `<p class="paragrafo-teste">${msg}</p>`; */