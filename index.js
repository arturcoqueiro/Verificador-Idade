var anoAtual = new Date().getFullYear()
var anoNasc = document.getElementById('ano')
var sex = document.getElementsByName('sex')
var gen = ''

function ver(){
    var age = anoAtual - Number(anoNasc.value)

    if (Number(anoNasc.value) >= anoAtual || age > 120){
        alert('Dados Inválidos, Tente Novamente')
    }else{
        if (sex[0].checked){
            gen = 'um homem'
        }else{
            gen = 'uma mulher'
        }
        document.getElementById("res").innerHTML = `Detectamos ${gen} de ${age} anos`
    }


    
}