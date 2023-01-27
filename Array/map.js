// Dobre os números 

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(obj => obj * 2)
// console.log(numerosEmDobro)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Lauro', idade: 62},
    { nome: 'Joaquim', idade:23 },
    { nome: 'Rosana', idade: 55},
    { nome: 'Mauro', idade: 19},
    { nome: 'Christopher', idade: 32},
    { nome: 'Charles', idade: 47},
];
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade : obj.idade }));
const comIds = pessoas.map(function(obj, indice){
    obj.id = (indice + 1) * 1;
    return obj
})
console.log(comIds);