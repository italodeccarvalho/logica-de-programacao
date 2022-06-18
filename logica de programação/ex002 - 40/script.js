//elaborar um programa para uma pizzaria, o qual teria que ler a conta total e dividir entre os clientes da mesa.

const consumoTotal = Number(prompt("Digite o valor total da conta: "));
const clientesTotal = Number(prompt("Digite o número de pessoas na mesa: "));
const divisao = consumoTotal / clientesTotal;
alert (`O preço por cliente é de: R$ ${divisao}`)
