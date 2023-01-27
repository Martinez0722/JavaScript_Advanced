const nomes = ['Luis' ,'Xabier', 'Andres', 'Julia', 'Ramon'];

// array.splice(índice atual, delete, add1, add2, add3 ...).
// const removidos = nomes.splice(3, 2, 'Iñaki');
// console.log(nomes, removidos);

// shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// Push
// nomes.splice(5, 0, 'Xoan');
// console.log(nomes);

// unshift
nomes.splice(0,0, 'Juarez');
console.log(nomes)