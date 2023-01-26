// function funcao(){
//     console.log(arguments[0])
// }
// funcao('Value', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// arguments => sustenta todos os argumentos enviados
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento
//     }
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

function soma(a, b) {
    console.log(a + b);
}
soma(2);

function soma1(a, b = 2) {
    console.log(a + b);
}
soma1(2);

function soma2(a, b = 2, c = 4) {
    console.log(a + b + c);
}
soma2(2);

// Atribuição via desestruturação

function objeto({nome, sobrenome, idade}){
    console.log(nome, nome, sobrenome, idade);
}

let obj = {nome:'Luis Roberto', sobrenome:'Falca', idade: 40}
objeto(obj)

function array ([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}
array(['Carl','Jones', 29])

function conta(operador, acumulador,... numeros){
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    
    console.log(acumulador)
};
conta('*', 1, 20, 30, 40, 50)