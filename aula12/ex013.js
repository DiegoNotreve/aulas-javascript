var agora = new Date()
var diaDaSemana = agora.getDay()

/*  0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
*/

console.log(diaDaSemana)

switch(diaDaSemana) {
    case 0:
        console.log('hoje é domingo')
        break
    case 1:
        console.log('hoje é segunda')
        break
    case 2:
        console.log('hoje é terça')
        break
    case 3:
        console.log('hoje é quarta')
        break
    case 4:
        console.log('hoje é quinta')
        break
    case 5:
        console.log('hoje é sexta')
        break
    case 6:
        console.log('hoje é sábado')
        break

        default:
            console.log('ERRO, Dia inválido')
}