/* If - Else  */

const DatadeHoje = new Date()
const hora = 43  // DatadeHoje.getHours()

if (hora >= 5 && hora < 12) {
    console.log('Bom dia')

} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde') 

} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite')

} else if (hora >= 1 && hora < 5) {
    console.log('Boa madrugada')
} else {
    console.log('Valor inválido!')
}

console.log(hora)


 