
//elaborar um programa que leia um numero e informar quais são seus numeros vizinhos.

const numero = Number(prompt("Digite um número: ")) //converter para numero
let menorNumero = numero - 1
let maiorNumero = numero + 1
alert (`O número antecessor é: ${menorNumero} \n O número sucessor é: ${maiorNumero}`) //usar crase + ${function}