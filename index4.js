//  1- Perguntar o nome da pessoa;

// 2- Perguntar o tamanho da pizza;

// 3- Perguntar quantos sabores serão a pizza;
//     3.1- perguntar o/os sabores das pizzas;

// 4- perguntar se ele quer borda recheada;

// 5- Perguntar a bebida ;

// 6- tipo de entrega;
//     6.1- se for delivery pedir os dados de localização(Celular, Rua, Número, Complemento, Bairro, Ponto de referência);

// ok 7- Fazer a soma de todos os valores;

// 8- Confirmar o pedido;

// 9- Forma de pagamento;
//     9.1- se for em dinheiro tem que ver se precisa de troco;

// 10- nomear o número do pedido;

// 11- mostrar valores na tela;

// 12- Agradecemos sua preferência senhor(a) Fulano de tal.

let nome = prompt("Bem vindo, por favor informe seu nome : )!");

let tamanhoPizza = parseInt(prompt(`${nome} 1: Pequena 20cm  - R$25,00\n2: Media 25cm  - R$30,00\n3: Gigante 35cm  - R$40,00\n4: Familia 40cm  - R$45,00`));


let bordaPizza = parseInt(prompt(`Tipo de borda:\n1: Gorgonzola  - R$10,00\n2: Provolone  - R$8,00\n3:Catupiry  - R$5,00\n4: Cheddar - R$5,00\n5:Sem borda`));
let valorBordaPizza = [ 0,1]

let numeroSaborPizza = parseInt(prompt(`${nome} você deseja uma pizza com 1 ou 2 sabores?`));

let saborPizza = parseInt(prompt(`1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));

let saborPizza2 = parseInt(prompt(`1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));


let bebida = parseInt(prompt(`1: Coca Cola  - R$12,00\n2: Fanta - R$10,00\n3: Guaraná Antarctica  - R$10,00\n4: H2O  - R$8,00\n5: Del Valle  - R$7,00`));
let valorBebida = [12, 10, 10, 8, 7];


let tipoEntrega = parseInt(prompt(`1: Retirada no Balcão - R$0,00\n
2: Delivery  - R$5,00
`));


let valorEntrega = [0, 5];


let dadosEntrega = {
    celular: prompt(`Digite o seu número de celular`),
    bairro: prompt(`Digite o nome do seu bairro`),
    rua: prompt(`Digite o nome da sua rua`),
    complemento: prompt(`Digite um complemento`),
    numeroCasa: prompt(`Digite o numero da sua casa`),
    pontoDeReferencia: prompt(`Digite um ponto de referencia`)
};

let somaTotal;

let confirmacao = parseInt(prompt(`Deseja confirmar seu pedido?`));
let certeza = parseInt(prompt(`Tem certeza?`));

let formaPagamento = parseInt(prompt(`1: Cartão\n
2: Pix\n
3: PicPay\n
4: Dinheiro`));


//1 calabresa  -
//2 4 queijos
//3 frango
//4 portuguesa
//5 camarao
//6 carne seca
//7 lombo canadense
//8 x-fritas


function pizzaSaborUnico(saborPizza) {
    let sabor;
    switch (saborPizza) {
        case 1:
            sabor = "Calabresa"
            break;
        case 2:
            sabor = "4 Queijos"
            break;
        case 3:
            sabor = "Frango"
            break;
        case 4:
            sabor = "Portuguesa"
            break;
        case 5:
            sabor = "Camarão"
            break;
        case 6:
            sabor = "Carne seca"
            break;
        case 7:
            sabor = "Lombo Canadense"
            break;
        case 8:
            sabor = "X-Fritas"
            break;
    }return sabor
}
function pizzaSaborDuplo(saborPizza, saborPizza2) {
    let sabor1;
    let sabor2;
    switch (saborPizza) {
        case 1:
            sabor1 = "Calabresa"
            break;
        case 2:
            sabor1 = "4 Queijos"
            break;
        case 3:
            sabor1 = "Frango"
            break;
        case 4:
            sabor1 = "Portuguesa"
            break;
        case 5:
            sabor1 = "Camarão"
            break;
        case 6:
            sabor1 = "Carne seca"
            break;
        case 7:
            sabor1 = "Lombo Canadense"
            break;
        case 8:
            sabor1 = "X-Fritas"
            break;
    }
    switch (saborPizza2) {
        case 1:
            sabor2 = "Calabresa"
            break;
        case 2:
            sabor2 = "4 Queijos"
            break;
        case 3:
            sabor2 = "Frango"
            break;
        case 4:
            sabor2 = "Portuguesa"
            break;
        case 5:
            sabor2 = "Camarão"
            break;
        case 6:
            sabor2 = "Carne seca"
            break;
        case 7:
            sabor2 = "Lombo Canadense"
            break;
        case 8:
            sabor2 = "X-Fritas"
            break;
    }
return sabor1 + sabor2
}



