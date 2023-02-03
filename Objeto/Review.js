// const pessoa = {
//     nome: 'Graham',
//     sobrenome: 'Chavez'
// };

// const chave = 'sobrenome'
// console.log(pessoa[chave]); // Anotação de colchetes
// console.log(pessoa.nome); // Anotação de ponto

const pessoa1 = new Object();

pessoa1.nome = 'Gael';
pessoa1.sobrenome = 'Simonsen';
pessoa1.idade= 38
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa1) {
    console.log(chave)
}