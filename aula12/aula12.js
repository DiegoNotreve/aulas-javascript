/* CONDIÇÃO PARA VER A POSSIBILIDADE DE VOTAÇÃO */


var idade = 30
console.log(`Vc tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65){ /* se a idade for menor q 18 ou maior q 65 */
    console.log('Voto opicional')
} else {
    console.log('voto obrigatório')
}