// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar valores
// -> Reduzir(somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroPares = numeros.filter(valor => valor % 2 === 0)
.map(valor =>  valor * 2)
.reduce((acumulador, valor) =>  acumulador += valor, 0);
// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro
// 324 Redução 

console.log(numeroPares);