let saldo = 5000;
let escolha = "";
let nome, cpf;

//entrada no sistema - Validação!
do{
  nome = prompt("Digite seu nome");
  cpf = prompt("Digite seu cpf");
  
  if((nome !== "Juca") || (cpf !== "12345678900")){
    alert(`${nome} seu nome não consta na base de dados! Tente novamente.`);
  }
}while((nome !== "Juca") || (cpf !== "12345678900"));
  
    alert(`${nome} Seja bem vindo!`);

//loop de acesso ao sistema - menu 
do{
  escolha = prompt("O que deseja fazer hoje?\n Extrato | Saque | Sair")
  
  switch(escolha){
    
    case "Extrato":
      alert(`Seu saldo é ${saldo}`)
      break;
    
    case "Saque" :
      let retirada = parseFloat(prompt("Digite o valor do saque: "));

      if((retirada > saldo) || (retirada < 0)){
        alert("Saldo insuficiente!");
      }else{
      saldo -= retirada;
      alert(`Retirada efetuada com sucesso de ${retirada}`);
      alert(`Seu saldo residual é de ${saldo}`);
      break;
      }
    case "Sair":
      alert(`${nome} Agradecemos pela preferência e aguardamos seu retorno!`);
      break;

    default:
      alert("Erro: Essa opção não existe. Favor tentar novamente");
      break;    
  }
}while(escolha != "Sair");