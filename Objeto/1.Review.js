// const pessoa = {
//     nome: 'Graham',
//     sobrenome: 'Chavez'
// };

// const chave = 'sobrenome'
// console.log(pessoa[chave]); // Anotação de colchetes
// console.log(pessoa.nome); // Anotação de ponto

// ------> ------> <------- <-------

// const pessoa1 = new Object();

// pessoa1.nome = 'Gael';
// pessoa1.sobrenome = 'Simonsen';
// pessoa1.idade= 38
// pessoa1.falarNome = function () {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// for (let chave in pessoa1) {
//     console.log(chave)
// }

// Factory functions / Constructor functions / Classes
// Factory function 
// function criaPessoa(nome, sobrenome) {
//     return{
//        nome, 
//        sobrenome,
//        get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//        } 
//     }
// }

// const p1 = criaPessoa('Luka', 'Wojczech')
// console.log(p1.nomeCompleto)

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome= sobrenome;
    // Object.freeze(this); // A partir disso o objeto não pode ser alterado de forma alguma
}

const p1 = new Pessoa('Lewis', 'Myers');
Object.freeze(p1); // trava o objeto
p1.nome = 'Something else';
console.log(p1);