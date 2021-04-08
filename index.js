//  1- Perguntar o nome da pessoa;

// 2- Perguntar o tamanho da pizza;

// 3- Perguntar quantos sabores serão a pizza;
//     3.1- perguntar o/os sabores das pizzas;

// 4- perguntar se ele quer borda recheada;

// 5- Perguntar a bebida ;

// 6- tipo de entrega;
//     6.1- se for delivery pedir os dados de localização(Celular, Rua, Número, Complemento, Bairro, Ponto de referência);

// 7- Fazer a soma de todos os valores;

// 8- Confirmar o pedido;

// 9- Forma de pagamento;
//     9.1- se for em dinheiro tem que ver se precisa de troco;

// 10- nomear o número do pedido;

// 11- mostrar valores na tela;

// 12- Agradecemos sua preferência senhor(a) Fulano de tal.

let nome = prompt("Bem vindo, por favor informe seu nome : )!");

let tamanhoPizza = parseInt(prompt(`${nome} 1: Pequena 20cm  - R$25,00\n2: Media 25cm  - R$30,00\n3: Gigante 35cm  - R$40,00\n4: Familia 40cm  - R$45,00`));
let valorTamanhoPizza = [25, 30, 40, 45];

let bordaPizza = parseInt(prompt(`Tipo de borda:\n1: Gorgonzola  - R$10,00\n2: Provolone  - R$8,00\n3:Catupiry  - R$5,00\n4: Cheddar - R$5,00\n5:Sem borda`));
let valorBordaPizza = [10, 8, 5, 5, 0];

let numeroSaborPizza = parseInt(prompt(`${nome} você deseja uma pizza com 1 ou 2 sabores?`));

let saborPizza = parseInt(prompt(`1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));
let nomeSabor = ["Calabresa", "4 Queijos", "Frango com Catupiry", "Portuguesa", "Camarão", "Carne seca", "Lombo Canadense", "X-Fritas"
];


if (numeroSaborPizza == 2) {

    let saborPizza2 = parseInt(prompt(`Agora o segundo sabor:\n1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));
    let nomeSabor2 = ["Calabresa", "4 Queijos", "Frango com Catupiry", "Portuguesa", "Camarão", "Carne seca", "Lombo Canadense", "X-Fritas"
    ];
}

let bebida = parseInt(prompt(`1: Coca Cola  - R$12,00\n2: Fanta - R$10,00\n3: Guaraná Antarctica  - R$10,00\n4: H2O  - R$8,00\n5: Del Valle  - R$7,00`));
let valorBebida = [12, 10, 10, 8, 7];

let tipoEntrega = parseInt(prompt(`1: Retirada no Balcão - R$0,00\n
2: Delivery  - R$5,00
`));
let valorEntrega = [0, 5];

if(tipoEntrega == 2){
    let dadosEntregaDelivery = {
        celular: prompt(`Digite o seu número de celular`),
        bairro: prompt(`Digite o nome do seu bairro`),
        rua: prompt(`Digite o nome da sua rua`),
        complemento: prompt(`Digite um complemento`),
        numeroCasa: prompt(`Digite o numero da sua casa`),
        pontoDeReferencia: prompt(`Digite um ponto de referencia`)
    };
}

let somaTotal = valorBebida[bebida - 1] + valorBordaPizza[bordaPizza - 1] + valorTamanhoPizza[tamanhoPizza - 1] + valorEntrega[tipoEntrega - 1];

switch (numeroSaborPizza, tipoEntrega) {

    case numeroSaborPizza == 2 && tipoEntrega == 2: 
        alert(`O seu pedido foi:\nTamanho: ${tamanhoPizza}.\nO tipo de borda é: ${saborPizza2}\n${}`)
        break;


let confirmacao = parseInt(prompt(`Deseja confirmar seu pedido?`));
let certeza = parseInt(prompt(`Tem certeza?`));

let formaPagamento = parseInt(prompt(`1: Cartão\n
2: Pix\n
3: PicPay\n
4: Dinheiro`));



