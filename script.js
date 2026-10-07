function verificarIdade() {
  // 1. captura o valor digitado no campo de input
  const elementoInput = document.getElementById("campoIdade")
  const idadeDigitada = parseInt(elementoInput.value)

  // 2. acha o elemento onde o texto de resultado será exibido
  const elementoResultado = document.getElementById("mensagemResultado");

  // 3. impede processamento se o campo estiver em branco
  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida."
    elementoResultado.style.color = "#dc2626";
    return
  }

  //4. bifurcação entre fluxo entre maio e menor de idade
  if(idadeDigitada >= 18) {
    elementoResultado.innerText = `Você tem ${idadeDigitada} anos e já é maior de idade.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`verificação aprovada: ${idadeDigitada} anos(maior de idade)`);
  }
    else {
    elementoResultado.innerText = `Você tem ${idadeDigitada} anos e ainda é menor de idade.`;
    elementoResultado.style.color = "#d97706"
    console.log(`Verificação informativa: ${idadeDigitada} anos(Menor de idade)`);
  }
}