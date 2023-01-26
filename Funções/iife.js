// IIFE -> Immediately invoked function expression função auto invocada
(function(idade, peso, altura){

    const sobrenome = 'Jones';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Jon'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(35, 90, 1.95);
