function AllScope() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('#resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#inome');
        const sobrenome = form.querySelector('#isobrenome');
        const peso = form.querySelector('#ipeso');
        const altura = form.querySelector('#ialtura');

        pessoas.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value});

        resultado.innerHTML += `${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value} <br>`;

        console.log(pessoas);

    };

    form.addEventListener('submit', recebeEventoForm);

    
};

AllScope();