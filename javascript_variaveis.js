function armazenarValor() {


    //amarzena o valor que o usuario digitou
    var userInput = document.getElementById("userInput").value;

    //exibe o valor amarzenado
    console.log("Valor adicionado : " + " " + userInput);

    //atualiza o valor que o usuario digitar
    document.getElementById("valorInserido").innerText = "Valor inserido : " + userInput;


}

