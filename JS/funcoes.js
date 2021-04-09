function tamanhoDaPizza(tamanhoPizza) {
    let tamanho;
    switch (tamanhoPizza) {
        case 1:
            tamanho = "Pequena (20cm)";
            break;
        case 2:
            tamanho = "Media (25cm)";
            break;
        case 3:
            tamanho = "Gigante (35cm)";
            break;
        case 4:
            tamanho = "Gigante (45cm)";
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
        case 5: return `Você não escolheu nenhum sabor para a borda`
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
        case 6:
            nomeDaBebida = "Sem bebida"
            break;
    }
    return nomeDaBebida
}


function correio(tipoEntrega) {
   
    if (tipoEntrega == 2) {
        telefone = prompt(`Informe o telefone com DDD:\nExemplo: (22) 999999999`);
        enderecoCompleto = prompt(`Informe o seu endereço com número:\nExemplo: Avenida Alberto Braune, 870`);
        complemento = prompt(`Tem algum complemento para nos ajudar?`);
        bairro = prompt(`Informe o seu bairro:`);
        referencia = prompt(`Tem algum ponto de referência para auxiliar o entregador?`);

        return `Delivery`;

    } else {
        nomeRetirada = prompt(`Informe o nome de quem irá realizar a retirada do pedido:`);
        telefoneRetirada = prompt(`Informe um telefone com DDD para retirada do pedido\n Exemplo: (22) 999999999`);

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
            pagamento = "PIX (+5522999999999):D"
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
    return Math.floor(Math.random() * 1001);
}
