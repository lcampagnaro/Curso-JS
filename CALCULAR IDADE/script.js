function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!! - [ERRO] Ano inválido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_M.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_M.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto_M.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_M.png')
            }
        } else
        if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_F.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_F.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'Adulto_F.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso_F.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}