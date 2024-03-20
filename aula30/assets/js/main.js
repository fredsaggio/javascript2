/* const boxText = document.querySelector('h1#mainText'); 
const data = new Date();

boxText.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}); // Tava dando erro no 'time Style', sempre olhe no console. */

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

        switch (dia) {
            case 0:
                dia = 'Domingo';
                return dia;
            case 1: 
                dia = 'Segunda-feira';
                return dia;
            case 2: 
                dia = 'Terça-feira';
                return dia;
            case 3:
                dia = 'Quarta-feira';
                return dia;
            case 4:
                dia = 'Quinta-feira';
                return dia;
            case 5:
                dia = 'Sexta-feira';
                return dia;
            case 6:
                dia = 'Sábado'
                return dia;
            default:
                dia = 'Dia inválido';
                return dia;
        }
    }

    function textoFormatado() {
        const dia = diaSemanaTexto;
        const dianumero = zeroLeft(diaSemanaNumero);
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
        switch(mes) {
            case 0:
                mes = 'Janeiro'
                return mes;
            case 1:
                mes = 'Fevereiro'
                return mes;
            case 2:
                mes = 'Março'
                return mes;
            case 3:
                return mes;
            case 4:
                mes = 'Maio'
                return mes;
            case 5:
                mes = 'Junho'
                return mes;
            case 6:
                mes = 'Julho'
                return mes;
            case 7:
                mes = 'Agosto'
                return mes;
            case 8:
                mes = 'Setembro'
                return mes;
            case 9:
                mes = 'Outubro'
                return mes;
            case 10:
                mes = 'Novembro'
                return mes;
            case 11:
                mes = 'Dezembro'
                return mes;
            default: 
                mes = 'Mês inválido!'
                return mes;

        }
    }
    const dataFormatada = textoFormatado()
    textBox.innerHTML = dataFormatada
}
allScope();
