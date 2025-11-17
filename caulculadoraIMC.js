function calculoIMC() {

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    const IMC = (peso / altura ** 2);
    const imcFormatado = IMC.toFixed(2);
    let classificacao = '';

    if (isNaN(peso) || isNaN(altura)) {
    alert("Insira valores numéricos válidos!");
    return;
    }

    // Usando switch...case para definir a classificação do IMC
    switch (true) {
    case (IMC < 18.5):
        classificacao = 'Abaixo do peso';
        break;
    case (IMC >= 18.5 && IMC < 25):
        classificacao = 'Peso normal';
        break;
    case (IMC >= 25 && IMC < 30):
        classificacao = 'Acima do peso';
        break;
    case (IMC >= 30 && IMC < 35):
        classificacao = 'Obesidade I';
        break;
    case (IMC >= 35 && IMC < 40):
        classificacao = 'Obesidade II';
        break;
    case (IMC >= 40):
        classificacao = 'Obesidade III';
        break;
    default:
        classificacao = 'Classificação desconhecida';
    }

    document.getElementById("imcCalculado").textContent = `Seu IMC é: ${imcFormatado}`;
    document.getElementById("classificacao").textContent = `Sua classificação é: ${classificacao}`;
}