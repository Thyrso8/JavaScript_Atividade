var raio = prompt("Digite o valor do raio da esfera:");

raio = parseFloat(raio);

var volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

console.log("O volume da esfera é: " + volume.toFixed(2));
