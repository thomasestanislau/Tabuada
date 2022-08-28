function executar(){
    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('selecao')

if(numero.value.length == 0){
    alert('Erro')
}else{

    var n = Number(numero.value)
    tabuada.innerHTML = '' //para limpar o valor após a execução do for

    for(var c = 1; c <= 10; c++){
        var res = n * [c]
        var item = document.createElement('option') 
        item.text = ` ${n} x ${c} = ${res} `
        tabuada.appendChild(item)
    }
}
}

function limpar(){
    var tabuada = document.getElementById('selecao')
    tabuada.innerHTML = ''
}