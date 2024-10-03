function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`

    // Colocando o bloco condicional dentro da função
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png' // Imagem para a manhã
        document.body.style.background = '#f1bc2a'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png' // Imagem para a tarde
        document.body.style.background = '#b96d2e'
    } else {
        img.src = 'noite.png' // Imagem para a noite
        document.body.style.background = '#515cc5'
    }
}
