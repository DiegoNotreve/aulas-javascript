function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('Verifique os dados e tente novamente');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-M.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'adolescente-M.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto-H.png');
      } else {
        img.setAttribute('src', 'idoso-M.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-F.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'adolescente-F.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto-M.png');
      } else {
        img.setAttribute('src', 'idosa-F.png');
      }
    }
    res.style.textAlign ='center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
