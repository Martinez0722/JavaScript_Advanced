// Declaração de função (Function hostin)
sayHi()
function sayHi() {
    console.log('Hi');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const immAdata = function () {
    console.log("I'm a data.");
};
immAdata();

function executeFunction (funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executeFunction(immAdata);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de objeto
const obj = {
    parle: function() {
        console.log('Je parle...');
    }
}
obj.parle();

const obj1 = {
    parlon() {
        console.log('Je parle...')
    }
}
obj1.parlon();
