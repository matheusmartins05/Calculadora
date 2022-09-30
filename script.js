function inserirNumero (num){
    let numero = document.querySelector('.resultadoArea').innerHTML;
    document.querySelector('.resultadoArea').innerHTML = numero + num;
}

function limpar (){
    document.querySelector('.resultadoArea').innerHTML = "";
}


function apagarNumero (){
    let resultado = document.querySelector('.resultadoArea').innerHTML;
    document.querySelector('.resultadoArea').innerHTML = resultado.substring( 0, resultado.length -1);
}

function calcular(){
    let resultado = document.querySelector('.resultadoArea').innerHTML;

    if(resultado){
        document.querySelector('.resultadoArea').innerHTML = eval(resultado);
    }
    else{
        document.querySelector('.resultadoArea').innerHTML = "Nada..."
    }
}
