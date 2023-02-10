function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome ;
}

Pessoa.prototype.nomeCompleto = () =>{
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Luke',' Shaw');

// console.log(pessoa1.nomeCompleto())

//6. Manipulando o prototype

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(20)
console.log(p1)

// Pegando prototype de uma outra função

const p2 = {
    nome:'Chaveiro',
    preco: 8
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable:true,
        value: 42
    }
});

p3.aumento(10);
console.log(p3);