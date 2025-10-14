
let nomeCompleto = "Oska";
let idade = 25;
let temHabilitacao = true;
let peso = null;
const altura = 1.80;

let carroCor = "Azul";
let carroAno = 2018;
let carroModelo = "Gol 98";
let carroMotor = 1.6;

let carro = {
    cor: "Azul",
    ano: 2018,
    modelo: "Gol 98",
    motor: 1.6
};

let cliente = {
    nome: "Marcelo"
};

// VETORES

let amigos = ["Santiago", "Julia", "Winny", "Castiel"];
amigos[1] = "Marinho"

//console.log (amigos[1]);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros[3] = 11;

//console.log(numeros[3]);

// FUNÇÕES

function validaVenda(status, valor){
    //console.log("Sua venda foi: " + status + " O valor foi: " + valor);
}

//validaVenda("Aprovada", 200);

function desconto(valor){
    let valorDesconto = valor - (valor * 0.20);
    return valorDesconto;
}

let venda = 300;
let vendaComDesconto = desconto(venda);
//console.log(vendaComDesconto);

// operador ternário 

let velocidade = 90;
let limite = velocidade > 100 ? "Alta" : "Baixa";
//console.log(limite);

//FOR

for(i = 9; i <= 10; i ++){
    console.log("numero: " + i);
}