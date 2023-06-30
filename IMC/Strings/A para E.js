function substituirLetras(frase) {
    var novaFrase = frase.replace(/a/g, 'e');
  
    return novaFrase;
  }
  
  var fraseOriginal = 'Louis Feras';
  var fraseModificada = substituirLetras(fraseOriginal);
  
  console.log('Frase original:', fraseOriginal);
  console.log('Frase modificada:', fraseModificada);
  