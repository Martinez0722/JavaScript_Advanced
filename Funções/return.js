// return
// retorna um valor
// termina a função

function soma(a, b){
    return a + b;
}

console.log(soma(5, 2))

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Paolo', 'Coloccini');


console.log(typeof p1);

function falaFrase(comeco) {
    function falaResto(resto){
        return  comeco + '' + resto;
    }
    return falaResto;
}

const helloWorld = falaFrase('Salut');
console.log(helloWorld('monde'));
