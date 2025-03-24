function exe1(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com média " + media
    }
}
function exe2(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media <= 10)){
        document.getElementById("media").innerHTML = "Aprovado " + media 
    }
    else {
        document.getElementById("media").innerHTML = "Problema com notas"
    }
}
function exe3(){
    //dados do usuario 
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //calcula o menor
    let menor
    if (nro1 < nro2){
        document.getElementById("menor").innerText = "o menor é " + nro1
    }
    else if (nro2 < nro1){
           document.getElementById("menor").innerText = "o menor é " + nro2
    }
    else {
        document.getElementById("menor").innerText = "os dois são iguais"
    }
}
function exe4(){
    //dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    if (nro1 < nro2){
        document.getElementById("maior").innerText = "o maior é " + nro1
    }
    else if (nro2 < nro1){
           document.getElementById("maior").innerText = "o maior é " + nro2
    }
    else if (nro2 < nro3){
        document.getElementById("maior").innerText = "o maior é " + nro2
    }
    else if (nro3 < nro1){
    document.getElementById("maior").innerText = "o maior é " + nro2
    }
    else if (nro3 < nro2){
        document.getElementById("maior").innerText = "o maior é " + nro2
    }
    else {
        document.getElementById("maior").innerText = "os dois são iguais"
    }
}
function exe6(){
    // recupera os dados do usuário
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro1").value)
    let selecao = Number(document.getElementById(selecao).value)

    switch(selecao){
        case 1: document.getElementById("result").innerHTML = "A potencia é " + 
        Math.pow(nro1, nro2)
        break
        case 2: document.getElementById("result").innerHTML = "RQ do nro1 " + Math.sqrt(nro1).toFixed(2)
        + "<br/> RQ d nro2" + Math.cbrt(nro2).toFixed(2)
        break
        case 3: document.getElementById("result").innerHTML = "RQ do nro2" + Math.cbrt(nro2).toFixed(2)
         + "<br/> RQ d nro2" + Math.cbrt(nro2).toFixed(2)
         break
    }
}   
function exe7(){
    //let salario = Number(document.getElementById).
}
function exe8(){
    let salario = Number(document.getElementById("salario").value)
    let prestacao = Number(document.getElementById("prestacao").value)
    let emprestimo = salario * 0.3
    if (prestacao <= emprestimo){
        document.getElementById("emprestimo").innerText = "Emprestimo concedido"
    }
    else {
        document.getElementById("emprestimo").innerText = "Emprestimo negado"
    }
}