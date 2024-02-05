// Valor escolhido pelo usuário
var numero
var tamanhoTabuada
// Div da tabuada
var tabuada_adicao = document.querySelector("#tabuada_adicao")
var tabuada_subtracao = document.querySelector("#tabuada_subtracao")
var tabuada_multiplicacao = document.querySelector("#tabuada_multiplicacao")
var tabuada_divisao = document.querySelector("#tabuada_divisao")

// Variáveis auxiliares
var txt_adicao = ''
var txt_subtracao = ''
var txt_multiplicacao = ''
var txt_divisao = ''

function tabuada() {
    numero = document.getElementById("numero").value
    tamanhoTabuada = parseInt(prompt("Digite o tamanho da tabuada:"))

    // Verificar se o valor inserido é válido
    if (isNaN(tamanhoTabuada)) {
        alert("Por favor, insira um valor válido.")
        return
    }

    txt_adicao += ("<h2>Adição</h2><br>")
    for(let i = 1; i <= tamanhoTabuada; i++){
        txt_adicao += (numero + " + " + i + " = "  + (+numero + i) + "<br>")
    }
    tabuada_adicao.innerHTML = txt_adicao
    txt_adicao = ''

    txt_subtracao += ("<h2>Subtração</h2><br>")
    for(let i = 1; i <= tamanhoTabuada; i++){
        txt_subtracao += (numero + " - " + i + " = "  + (numero - i) + "<br>")
    }
    tabuada_subtracao.innerHTML = txt_subtracao
    txt_subtracao = ''

    txt_multiplicacao += ("<h2>Multiplicação</h2><br>")
    for(let i = 1; i <= tamanhoTabuada; i++){
        txt_multiplicacao += (numero + " x " + i + " = "  + (numero * i) + "<br>")
    }
    tabuada_multiplicacao.innerHTML = txt_multiplicacao
    txt_multiplicacao = ''

    txt_divisao += ("<h2>Divisão</h2><br>")
    for(let i = 1; i <= tamanhoTabuada; i++){
        txt_divisao += (numero + " / " + i + " = "  + (numero / i) + "<br>")
    }
    tabuada_divisao.innerHTML = txt_divisao
    txt_divisao = ''
}