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

let telefone;
let enderecoCompleto;
let complemento;
let bairro;
let referencia;
let nomeRetirada;
let telefoneRetirada;
let troco;
let valorTroco;

let tamanhoPizza = parseInt(prompt(`Beleza,${nome}!!\nAgora escolha o tamanho da sua pizza:\n1: Pequena 20cm  - R$25,00\n2: Media 25cm  - R$30,00\n3: Gigante 35cm  - R$40,00\n4: Familia 40cm  - R$45,00`));
let valorTamanhoPizza = [25, 30, 40, 45];

let bordaPizza = parseInt(prompt(`Agora escolha o tipo de borda:\n1: Gorgonzola  - R$10,00\n2: Provolone  - R$8,00\n3:Catupiry  - R$5,00\n4: Cheddar - R$5,00\n5: Sem borda recheada`));
let valorBordaPizza = [10, 8, 5, 5, 0];

let numeroSaborPizza = parseInt(prompt(`${nome} você deseja uma pizza com 1 ou 2 sabores?`));


let saborPizza = parseInt(prompt(`Perfeito, nós temos os seguintes sabores:\n1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));

let saborPizza2;

if (numeroSaborPizza == 2) {
    saborPizza2 = parseInt(prompt(`Agora escolha o sabor da outra metade:\n
    1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));
}


let bebida = parseInt(prompt(`Agora para complementar o lanche, escolha uma bebida.\nNós temos as seguintes opções:\n1: Coca Cola  - R$12,00\n2: Fanta - R$10,00\n3: Guaraná Antarctica  - R$10,00\n4: H2O  - R$8,00\n5: Del Valle  - R$7,00`));
let valorBebida = [12, 10, 10, 8, 7];

let tipoEntrega = parseInt(prompt(`Qual é a forma de entrega que você prefere?\n1: Retirada no Balcão - R$0,00\n
2: Delivery  - R$5,00\n<br>Lembrando que se for retirar o pedido no balcão, sempre de máscara.`));
let valorEntrega = [0, 5];

let somaTotal = valorBebida[bebida - 1] + valorBordaPizza[bordaPizza - 1] + valorTamanhoPizza[tamanhoPizza - 1] + valorEntrega[tipoEntrega - 1];

let informacoesDelivery = correio(tipoEntrega);
let tamanho = tamanhoDaPizza(tamanhoPizza);
let borda = bordasSabor(bordaPizza);
let sabor = pizzaSaborUnico(saborPizza);
let meia2 = pizzaSaborDuplo(saborPizza2);
let acompanhamento = nomeBebida(bebida);

let formaPagamento = parseInt(prompt(`O valor total foi do pedido foi: R$${somaTotal},00.\nPara finalizar, nos informe a qual será a forma de pagamento\n1: Cartão (Débito/Crédito)\n2: Pix\n3: PicPay\n4: Dinheiro`));

let pagamento = formaDePagamento(formaPagamento);

if (formaPagamento == 4) {
    troco = prompt(`Você precisará de troco?\nDigite: sim ou não `).toLowerCase();

    if (troco == "sim") {
        valorTroco = parseInt(prompt(`O valor total foi de: R$${somaTotal},00.\n${nome}, digite para quanto precisaremos levar o troco`));
    }
}



if (numeroSaborPizza == 2) {
    alert(`O pedido ${numeroDoPedido()} foi:\nTamanho: ${tamanho}.\nO tipo de borda escolhido é: ${borda}\nUma metade será de: ${sabor}\nA outra metade será de: ${meia2}.\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é:${informacoesDelivery}.\nO valor total é: <strong>R$${somaTotal},00</strong>.\nA forma de pagamento será: ${pagamento}.`);
}
else if (numeroSaborPizza == 1) {
    alert(`O pedido ${numeroDoPedido()} foi:\nTamanho: ${tamanho}.\nO tipo de borda escolhido é: ${borda}\nUma metade será de: ${sabor}\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é:${informacoesDelivery}.\nO valor total é: <strong>R$${somaTotal},00</strong>.\nA forma de pagamento será: ${pagamento}.`);
}
else {
    alert('Você digitou algum dado errado, refaça o pedido!!\nNão desista de nós <3!!');

}

//let confirmacao = parseInt(prompt(`Deseja confirmar seu pedido?`));
//let certeza = parseInt(prompt(`Tem certeza?`));


function tamanhoDaPizza(tamanhoPizza) {
    let tamanho;
    switch (tamanhoPizza) {
        case 1:
            tamanho = "Pequena 20cm";
            break;
        case 2:
            tamanho = "Media 25cm";
            break;
        case 3:
            tamanho = "Gigante 35cm";
            break;
        case 4:
            tamanho = "Gigante 45cm";
            break;
    }
    return tamanho
}

function bordasSabor(bordaPizza) {
    switch (bordaPizza) {

        case 1: return `Gorgonzola`;
            break;
        case 2: return `Provolone`;
            break;
        case 3: return `Catupiry`;
            break;
        case 4: return `Cheddar`;
            break;
        case 5: return `Você escolheum um valor de borda inexistente`
            break;
    }
}

function pizzaSaborUnico(saborPizza) {
    let sabor;
    switch (saborPizza) {
        case 1:
            sabor = "Calabresa";
            break;
        case 2:
            sabor = "4 Queijos";
            break;
        case 3:
            sabor = "Frango";
            break;
        case 4:
            sabor = "Portuguesa";
            break;
        case 5:
            sabor = "Camarão";
            break;
        case 6:
            sabor = "Carne seca";
            break;
        case 7:
            sabor = "Lombo Canadense";
            break;
        case 8:
            sabor = "X-Fritas";
            break;
    }return sabor
}

function pizzaSaborDuplo(saborPizza2) {
    let sabor2;
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
    return sabor2
}

function nomeBebida(bebida) {
    let nomeDaBebida;
    switch (bebida) {
        case 1:
            nomeDaBebida = "Coca Cola"
            break;
        case 2:
            nomeDaBebida = "Fanta"
            break;
        case 3:
            nomeDaBebida = "Guaraná Antartica"
            break;
        case 4:
            nomeDaBebida = "H2O"
            break;
        case 5:
            nomeDaBebida = "Del Valle"
            break;
    }
    return nomeDaBebida
}


function correio(tipoEntrega) {
    if (tipoEntrega == 2) {
        telefone = prompt(`Informe o telefone com DDD:`);
        enderecoCompleto = prompt(`Confirme seu endereço com número:`);
        complemento = prompt(`Tem algum complemento?`);
        bairro = prompt(`Confirme seu bairro:`);
        referencia = prompt(`Tem algum ponto de referência para auxiliar o entregador?`);

        return `Delivery`;

    } else {
        nomeRetirada = prompt(`Informe o nome de quem irá realizar a retirada do pedido:`);
        telefoneRetirada = prompt(`Informe um telefone com DDD para retirada do pedido`);

        return `Retirada no balcão`;
    };
}

function formaDePagamento(formaPagamento) {
    let pagamento;
    switch (formaPagamento) {
        case 1:
            pagamento = "Cartão (débito/crédito)"
            break;
        case 2:
            pagamento = "pix"
            break;
        case 3:
            pagamento = "PicPay"
            break;
        case 4:
            pagamento = "Dinheiro"
            break;
    }
    return pagamento
}

function numeroDoPedido() {
    return Math.floor(Math.random() * 101);
}


