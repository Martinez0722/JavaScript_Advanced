// defineProperty - defineProperties
function Produto (nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable:true, // mostra a chave
        value: estoque,  // valor
        writable: true, // Controle de alteração da valor
        configurable: true // pode apagar a chave ou reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco:{
            enumerable:true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1) {
    console.log(chave);
}