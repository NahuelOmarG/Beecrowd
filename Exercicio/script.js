function Executar1008() {
let id;
let horas;
let valorHora;
let salario;
//ou: let id , horas , valorHora , salario;
id = Number(prompt("Digite seu id:"));
// id = Number("45")
// id = 45
horas = Number(prompt("Digite quantas horas voce trabalho?"));
valorHora = Number(prompt("Quanto voce ganha por hora?"));

salario = horas * valorHora

alert ("ID:"+ id + "\nSalário: R$" + salario.toFixed(2));
// limitar casas decimais variavel.toFixed(X)
// comissao = vendas * 15/100
// comissao = vendas * 0.15
}

function Executar1009 () {
//Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas 
// por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas 
//vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
let nomeVendedor
let salarioFixo
let vendasTotal
let comissao
let salarioFinal

nomeVendedor = prompt ("Digite o nome do Vendedor:");
salarioFixo = Number(prompt("Digite o salario do Vendedor:"));
vendasTotal = Number(prompt("Digite o total em dinheiro de vendas efetuadas no mes:"))

comissao = vendasTotal * 0.15
salarioFinal = comissao + salarioFixo

alert ("Usuario:" +nomeVendedor + "\n Salario final e :" +salarioFinal.toFixed(2))
}

function Executar1038 () {
    //leer codigo

let codigoItem= Number(prompt("Digite o codigo do item que deseja :"));
    //leer quantidade 

let qtdItem= Number(prompt("Quantidade: "));
    //definir o preco do produto

let preco

if (codigoItem ==1){
    preco = 4

}
else if (codigoItem ==2){
    preco = 4.5
    
}
else if (codigoItem ==3){
    preco = 5
    
}
else if (codigoItem ==4){
    preco = 2
  
}
else if (codigoItem ==5){
    preco = 1.5
    
}else{

    alert("Digite o codigo direito ai ó : ")

}
// calcular o valor da conta (preco * quantidade)
let valor = preco * qtdItem 
alert("O total e: " + valor);


}

function Executar1050 () {
let ddd = Number(prompt("Digite o DDD que deseja saber :"));


if(ddd == 61){
   // cidade = Brasilia
    alert ("Pertence a BRASILIA!!!");

}
else if(ddd == 71){
    //cidade = Salvador
    alert ("Pertence a SALVADOR!!!");

}
else if(ddd = 11){
    //cidade = Sao+Paulo
    alert ("Pertence a Sao Paulo!!");

}
else if(ddd = 21){
    //cidade = Rio+de+Janeiro
    alert ("Pertence a Rio de Janeiro!!");

}
else if(ddd = 32){
   // cidade = Juiz+de+Fora 
    alert ("Pertence a Juiz de Fora");

}
else if(ddd = 19){
    //cidade = Campinas
    alert ("Pertence a Campinas");

}
else if(ddd = 27){
    //cidade = Vitoria
    alert ("Pertence a Vitoria");
}
else if (ddd = 31){
    //cidade = Belo+Horizonte
    alert ("Pertence a Belo Horizonte!!!");
}
else {
    alert ("DDD no cadastrado.");
}

}
function Executar1115 (){
    let numX = Number((prompt))
    let numY = Number


}
function Executar1142 (){
    let cont = 1
    let contagemPUMs = 0
    let limitePUMs = Number(prompt("Quantos Pums?"))
    let acumulador = "" 
    //let i
while(contagemPUMs < limitePUMs){ //Enquanto a condicao que tiver for verdadera , ele ira a repetir.
  if (cont % 4 != 0){
    console.log(cont)
    acumulador += cont + " "
  } else{
    console.log("PUM")
    contagemPUMs++
    acumulador += "PUM\n"
  }
    cont++
}
alert(acumulador)
} //F2 = Renomea todas as variaveis

/*function simularCorrida(){
    let distancia = Number (prompt("Qual e a distancia desejada?:"));
    let distanciaX = 0;
    let distanciaY = 0;
    let tempo = 0; */

   /* while(distanciaY-distanciaX < distancia){
        distanciaX += 1
        distanciaY += 1.5
        tempo++
        console.log("y:" +distanciaY);
        console.log("x:" +distanciaX);
        console.log("Tempo:" +tempo);
        console.log("Diferenca" +(distanciaY-distanciaX));
        console.log("------------------");*/

    //}
    //alert ("Vai levar " + tempo + "minutos"); 
//} 
//tr = linea da tabela
//td= 
