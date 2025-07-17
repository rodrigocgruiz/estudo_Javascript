
let porcentagemDesconto = 0;
let quantidadeMilhas = 6000

if(quantidadeMilhas < 5000){
    console.log("Você não recebeu desconto");
}

if((quantidadeMilhas > 5000) &&  (quantidadeMilhas <= 30000)){
    console.log("Seu desconto foi de 10%" );
} else {
    porcentagemDesconto = 0;
    console.log("");
}