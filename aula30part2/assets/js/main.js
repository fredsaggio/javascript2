function allScope(){
    const data = new Date(); // Ele me dá sempre os valores específicos e de forma seca. 
    const horaAtual = data.getHours();
    const diaSemanaNumero = data.getDay();
    const diaSemanaTexto = diaDaSemana(diaSemanaNumero);
    const anoo = data.getFullYear()
    const mes = data.getMonth();
    const textBox = document.getElementById('mainText');
    const mesTexto = mesCorreto(mes)
    const minutoss = data.getMinutes()

    function diaDaSemana(dia) {
        let diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

        return diaSemana[dia];
    }

    function textoFormatado() {
        const dia = diaSemanaTexto;
        const diaNoMes = data.getDate()
        const dianumero = zeroLeft(diaNoMes);
        const mes = mesTexto;
        const ano = anoo;
        const hora = zeroLeft(horaAtual);
        const minutos = zeroLeft(minutoss);
        
        return `${dia}, ${dianumero} de ${mes} de ${ano} ${hora}:${minutos}`
        
    }

    function zeroLeft(num) {
        return num > 10 ? num : `0${num}`
    }

    function mesCorreto(mes) {
        let mesFormatado = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        return mesFormatado[mes];
    }
    const dataFormatada = textoFormatado()
    textBox.innerHTML = dataFormatada
}
allScope();

/* const boxText = document.querySelector('h1#mainText'); 
const data = new Date();

boxText.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); // Tava dando erro no 'time Style', sempre olhe no console. */
