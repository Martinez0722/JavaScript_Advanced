// Função construtora -> objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 1234567;
    const metodoInterno = function () {

    };

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Mario', 'Puzzi');
const p2 = new Pessoa('Otto', 'Kramer')

p2.metodo();