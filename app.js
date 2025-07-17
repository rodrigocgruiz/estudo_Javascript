alert('Boas vindas ao Jogo do Número Secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao numero secreto.
while (chute != numeroSecreto) {
  chute = parseInt(prompt('Escolha um numero de 1 a 100'));

  // Comparar se o numero digitado é valido
  if (isNaN(chute) || chute < 1 || chute > 100){
    alert('Digite um numero válido entre 1 e 100');
    continue;
  }
  
  //Se o chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    break;
  }else {
    if (chute > numeroSecreto) {
      alert(`O numero escolhido ${chute} é maior que o numero secreto!`);
    } else {
      alert(`O numero escolhido ${chute} é menor que o numero secreto!`);
    }
    tentativas++;
  }
}

let quantidadeTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${quantidadeTentativa}!`);