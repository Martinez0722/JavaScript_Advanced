function retornaFuncao() {
    const nome = 'Graham';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao)