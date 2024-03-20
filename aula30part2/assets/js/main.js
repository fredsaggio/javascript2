function allScope(){

    const textBox = document.getElementById('mainText');
    const data = new Date(); // Ele me dá sempre os valores específicos e de forma seca. 
    
    function nomeDosDias(dia) {
        let diaNome = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

        return diaNome[dia];
    }

    function textoFormatado() {
        const dia = nomeDosDias(diaSemana);

        const mesNome = nomeDosMeses(mes);

        return `${dia}, ${zeroLeft(data.getDate())} de ${mesNome} de ${data.getFullYear()} ${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}`;
        
    }

    function zeroLeft(num) {
        return num > 10 ? num : `0${num}`;
    }

    function nomeDosMeses(mes) {
        let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        return meses[mes];
    }

    const diaSemana = data.getDay();
    const mes = data.getMonth();

    const dataFormatada = textoFormatado();
    textBox.innerHTML = dataFormatada;
}
allScope();

/* const boxText = document.querySelector('h1#mainText'); 
const data = new Date();

boxText.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); // Tava dando erro no 'time Style', sempre olhe no console. */
