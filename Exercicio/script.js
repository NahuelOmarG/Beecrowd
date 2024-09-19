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
