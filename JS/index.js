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


let saborPizza = parseInt(prompt(`Perfeito, nós temos os seguintes sabores:\n1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`));

let saborPizza2;

if (numeroSaborPizza == 2) {
    saborPizza2 = parseInt(prompt(`Agora escolha o sabor da outra metade:\n1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita`));
}


let bebida = parseInt(prompt(`Agora para complementar o lanche, escolha uma bebida.\nNós temos as seguintes opções:\n1: Coca Cola  - R$12,00\n2: Fanta - R$10,00\n3: Guaraná Antarctica  - R$10,00\n4: H2O  - R$8,00\n5: Del Valle  - R$7,00\n6: Sem bebida`));
let valorBebida = [12, 10, 10, 8, 7, 0];

let tipoEntrega = parseInt(prompt(`Qual é a forma de entrega que você prefere?\n1: Retirada no Balcão - R$0,00\n
2: Delivery  - R$5,00\nLembrando que se for retirar o pedido no balcão, sempre de máscara.`));
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
    alert(`O número do seu pedido é: ${numeroDoPedido()}\nPedido:\nTamanho: ${tamanho}.\nO tipo de borda escolhido é: ${borda}\nUma metade será de: ${sabor}\nA outra metade será de: ${meia2}.\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é: ${informacoesDelivery}.\nO valor total é: R$${somaTotal},00.\nA forma de pagamento será: ${pagamento}.`);
}
else if (numeroSaborPizza == 1) {
    alert(`O número do seu pedido é: ${numeroDoPedido()}\nPedido:\nTamanho: ${tamanho}.\nO tipo de borda escolhido é: ${borda}\nUma metade será de: ${sabor}\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é: ${informacoesDelivery}.\nO valor total é: R$${somaTotal},00.\nA forma de pagamento será: ${pagamento}.`);
}
else {
    alert('Você digitou algum dado errado, refaça o pedido!!\nNão desista de nós <3!!');

}

let confirmacao = prompt(`Você deseja confirmar o pedido e os dados mostrados?\nDigite: sim ou não`).toLowerCase();

if(confirmacao != "sim"){
    alert("Pedido cancelado!!\nNão desista de nós!!\nReinicie a página, por favor!");
}

document.write(`<h3>O número do seu pedido é: ${numeroDoPedido()}.</h3>`);
document.write(`Tamanho: ${tamanho}.<br>`);
document.write(`O tipo de borda escolhido é: ${borda}.<br>`);
document.write(`Uma metade será de: ${sabor}<br>`);
document.write(`Sua bebida é: ${acompanhamento}<br>`);
document.write(`O tipo de entrega é:${informacoesDelivery}<br>`);
document.write(`O valor total é: <strong>R$${somaTotal},00</strong><br>`);
document.write(`A forma de pagamento será: ${pagamento}.<br>`);

if (troco == "sim"){
    document.write(`Enviaremos o troco de: R$${valorTroco - somaTotal},00.`);
}