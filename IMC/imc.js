function calcularIMC(peso, altura) {
  altura = altura / 100;

  var imc = peso / (altura * altura);

  imc = imc.toFixed(2);

  return imc;
}

var peso = 77;
var altura = 180;

var imc = calcularIMC(peso, altura);

console.log("O IMC é: " + imc);
