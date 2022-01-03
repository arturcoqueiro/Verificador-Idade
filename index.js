var anoAtual = new Date().getFullYear()
var anoNasc = document.getElementById('ano')
var sex = document.getElementsByName('sex')
var gen = ''

function ver(){
    var age = anoAtual - Number(anoNasc.value)

    if (Number(anoNasc.value) >= anoAtual || age > 120){
        alert('Dados Inválidos, Tente Novamente')
    }else{
        var img= document.createElement('img')
        if (sex[0].checked){
            gen = 'um homem'
            if (age < 10){
                img.setAttribute('src', 'imgs/foto-bebe-m.png')
            }else if(age < 21){
                img.setAttribute('src', 'imgs/foto-jovem-m.png')
            }else if (age < 50){
                img.setAttribute('src', 'imgs/foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'imgs/foto-idoso-m.png')
            }
        }else{
            gen = 'uma mulher'
            if (age < 10){
                img.setAttribute('src', 'imgs/foto-bebe-f.png')
            }else if (age < 21){
                img.setAttribute('src', 'imgs/foto-jovem-f.png')
            }else if(age < 50){
                img.setAttribute('src', 'imgs/foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'imgs/foto-idoso-f.png')
            }
        }
        //document.getElementById("res").innerHTML = `Detectamos ${gen} de ${age} anos`

        res.innerHTML = `Detectamos ${gen} de ${age} anos`
        res.appendChild(img)//Pq isso funciona????, Não criei uma variavel 'res' mas o JS pega o ID diretamente... E antes nao pegava qundo testei!!
    }


    
}