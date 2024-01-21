function All () {

    const dadosPessoas = []

    function Enviar() {
        let nome = document.getElementById('inome').value
        let sobrenome = document.querySelector('#isobrenome').value
        let peso = document.querySelector('#ipeso').value
        let altura = document.querySelector('#ialtura').value


        let dadosIndividuais = {nome, sobrenome, peso, altura}

        document.body.innerHTML += `${dadosIndividuais.nome} ${dadosIndividuais.sobrenome} ${dadosIndividuais.peso} ${dadosIndividuais.altura} <br>` 

        dadosPessoas.push(dadosIndividuais)
    } 
    
    Enviar();

}



 
