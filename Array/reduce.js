// Redução de array

// Some todos os numeros(reduce)
// Retorne um array com pares(filter)
// Retorne um array com o dobro (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const soma = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// },0)

// Filter
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const soma = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador;
// },[])
// console.log(soma)

//Map
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const soma = numeros.reduce(function(acumulador, valor) {
//     acumulador.push(valor * 2)
//     return acumulador;
// },[])
// console.log(soma)

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Lauro', idade: 62},
    { nome: 'Joaquim', idade:23 },
    { nome: 'Rosana', idade: 55},
    { nome: 'Mauro', idade: 19},
    { nome: 'Christopher', idade: 32},
    { nome: 'Charles', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
},0)

console.log(maisVelha);