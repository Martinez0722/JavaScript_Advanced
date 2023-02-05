// const produto = { nome: 'Produto', preco: 1.8 };
// // Spread ...
// const caneca = {
//     ... produto,
//     // criação de demais propriedades
//     material: 'porcelana'
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// const produto = { nome: 'Produto', preco: 1.8 };
// // Object.assign
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);
// console.log(Object.keys(caneca)) // Retorna as chaves do objeto
// console.log(Object.freeze(caneca)) // Congela o objeto em questão

const produto = { nome: 'Produto', preco: 1.3 };
// Object.defineProperty(produto, 'nome',{
//     writable: false,
//     configurable: false,
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto)); //Retorna um array com os valores do objeto sem as chaves
// console.log(Object.entries(produto)); // Retorna um array de arrays com chave e valor

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}