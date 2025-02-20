document.getElementById("calcular").addEventListener("click", function() {
    let nome = document.getElementById("nome").value.trim();
    let idade = parseInt(document.getElementById("idade").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (!nome || !idade || !peso || !altura) {
        resultado.innerHTML = "⚠️ Preencha todos os campos!";
        resultado.style.backgroundColor = "#ffcc00";
        return;
    }

    let imc = peso / (altura * altura);
    let categoria = "";
    let mensagem = "";
    let cor = "";

    if (imc < 18.5) {
        categoria = "Abaixo do Peso";
        mensagem = `Olá, ${nome}! Sua saúde é importante. Que tal melhorar sua alimentação? 🍎`;
        cor = "#3498db";
    } else if (imc < 24.9) {
        categoria = "Peso Normal";
        mensagem = `Parabéns, ${nome}! Você está no peso ideal. Continue assim! 💪`;
        cor = "#2ecc71";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
        mensagem = `${nome}, que tal incluir mais exercícios na sua rotina? 🚴‍♂️`;
        cor = "#f39c12";
    } else {
        categoria = "Obesidade";
        mensagem = `⚠️ ${nome}, atenção! Procure um profissional de saúde para orientações. ❤️`;
        cor = "#e74c3c";
    }

    resultado.innerHTML = `<strong>IMC: ${imc.toFixed(2)}</strong> - ${categoria}<br>${mensagem}`;
    resultado.style.backgroundColor = cor;
    resultado.style.color = "white";
});
