function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}
// Atrelando os metodos de prototypes de produto a função construtora Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => {
            return estoque;
        },
        set: (valor) => {
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const produto = new Produto('Caneta', 1.5);
const camiseta = new Camiseta('Regata', 7.5, 'Grená');
const caneca = new Caneca('Caneca azul', 20, 'Porcelana', 5)

console.log(produto);
console.log(camiseta);
console.log(caneca);