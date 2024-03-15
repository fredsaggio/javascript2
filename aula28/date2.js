const umDia = 60 * 60 * 24 * 1000;
const tresHoras = 60 * 60 * 3 * 1000;
const dataAtual = new Date(2008, 2, 28, 12, 36, 54, 234 + umDia + umDia - tresHoras);

console.log(dataAtual);
console.log(dataAtual.getDay()); // Vai dar 5 porque hoje é Sexta-feira.
console.log(dataAtual.getHours());

// Sunday = 0; Monday = 1; Tuesday = 2; Wednesday = 3; Thursday = 4; Friday = 5;