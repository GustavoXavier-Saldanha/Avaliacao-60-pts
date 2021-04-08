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

let tamanhoPizza = parseInt(prompt(`${nome}\n1: Pequena 20cm  - R$25,00\n2: Media 25cm  - R$30,00\n3: Gigante 35cm  - R$40,00\n4: Familia 40cm  - R$45,00`));


let bordaPizza = parseInt(prompt(`Tipo de borda:\n1: Gorgonzola  - R$10,00\n2: Provolone  - R$8,00\n3:Catupiry  - R$5,00\n4: Cheddar - R$5,00\n5:Sem borda`));

let numeroSaborPizza = parseInt(prompt(`${nome} você deseja uma pizza com 1 ou 2 sabores?`));


let saborPizza = parseInt(prompt(`1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));

let saborPizza2;

if(numeroSaborPizza == 2){
    saborPizza2 = parseInt(prompt(`Agora o segundo sabor:
    1: Calabresa - Mussarela, Calabresa e cebola \n2: 4 Queijos - Mussarela, Cheddar, Parmesão e Prato\n3: Frango com Catupiry- Mussarela, Frango e Catupiry\n4: Portuguesa - Mussarela, Pimentão, Cebola, Presunto, Ovo, Cebola\n5: Camarão - Mussarela, Camarão, Salsinha e Cebolinha\n6: Carne seca - Mussarela, Carne seca e cream cheese\n7: Lombo Canadense - Mussarela, Lombo Canadense, Tomate, Orégano, Cebola\n8: X-Fritas - Mussarela, Contra-filé, Presunto, Bacon, Ovo, Tomate, Cebola, Batata Frita
`));
}


let bebida = parseInt(prompt(`1: Coca Cola  - R$12,00\n2: Fanta - R$10,00\n3: Guaraná Antarctica  - R$10,00\n4: H2O  - R$8,00\n5: Del Valle  - R$7,00`));

let tipoEntrega = parseInt(prompt(`1: Retirada no Balcão - R$0,00\n
2: Delivery  - R$5,00
`));
let informacoesDelivery = correio(tipoEntrega);
let tamanho = tamanhoDaPizza(tamanhoPizza);
let borda = bordasSabor(bordaPizza);
let sabor = pizzaSaborUnico(saborPizza);
let meia2 = pizzaSaborDuplo(saborPizza2);
let acompanhamento = nomeBebida(bebida);
let pagamento = formaPagamento(formaPagamento);

let somaTotal;

if (numeroSaborPizza == 2){
        alert(`O seu pedido foi:\nTamanho: ${tamanho}.\nO tipo de borda é: ${borda}\nUma metade será de: ${sabor}\nA outra metade será de: ${meia2}.\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é:.\nO valor total é: ${somaTotal}.\nAforma de pagamento será: ${pagamento}.`);
}
    else if (numeroSaborPizza == 1){ 
        alert(`O seu pedido foi:\nTamanho: ${tamanho}.\nO tipo de borda é: ${borda}\nUma metade será de: ${sabor}\nSua bebida é: ${acompanhamento}.\nO tipo de entrega é:.\nO valor total é: ${somaTotal}.\nAforma de pagamento será: ${pagamento}.`);
    }
    else{ alert('Você digitou a quantidade de sabores da pizza errado');
      
}

//let confirmacao = parseInt(prompt(`Deseja confirmar seu pedido?`));
//let certeza = parseInt(prompt(`Tem certeza?`));


// let dadosEntrega = {
    // celular: prompt(`Digite o seu número de celular`),
    // bairro: prompt(`Digite o nome do seu bairro`),
    // rua: prompt(`Digite o nome da sua rua`),
    // complemento: prompt(`Digite um complemento`),
    // numeroCasa: prompt(`Digite o numero da sua casa`),
    // pontoDeReferencia: prompt(`Digite um ponto de referencia`)
// };

function tamanhoDaPizza(tamanhoPizza){
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
}

function bordasSabor(bordaPizza){
    switch(bordaPizza){

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
    let sabor1;
    let sabor2;
    switch (saborPizza2) {
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

function nomeBebida(bebida){
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
    if (tipoEntrega == 2){
       telefone = prompt(`Informe o telefone com DDD:`);
       enderecoCompleto = prompt(`Confirme seu endereço com número:`);
       complemento = prompt(`Tem algum complemento?`);
       bairro = prompt(`Confirme seu bairro:`);
       referencia = prompt(`Tem algum ponto de referência para auxiliar o entregador?`);

       return `Delivery`;   

    } else{
        nomeRetirada = prompt(`Informe o nome de quem irá realizar a retirada do pedido:`);
        telefoneRetirada = prompt(`Informe um telefone com DDD para retirada do pedido`);

        return `Retirada no balcão`;  
    }; 
}

function formaPagamento(formaPagamento) {
        let pagamento;
        switch (formaPagamento) {
            case 1:
                pagamento = "Cartão"
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
        }return pagamento
}



