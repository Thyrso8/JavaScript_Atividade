function isPalindrome(word) {
    var reversed = word.split('').reverse().join('');
  
    if (reversed === word) {
      return true;
    } else {
      return false;
    }
  }
  
  var palavra = prompt("Digite uma palavra:");
  var resultado = isPalindrome(palavra);
  
  if (resultado) {
    console.log(palavra + " é um palíndromo.");
  } else {
    console.log(palavra + " não é um palíndromo.");
  }
  