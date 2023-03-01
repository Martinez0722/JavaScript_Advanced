// Callback function

// function rand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function wait(msg, tempo) {
//     setTimeout(()=> {
//         console.log(msg)
//     }, tempo)
// }

// wait('Frase 1', rand(1, 3), function() {
//     wait('Frase 2', rand(1, 3), function() {
//         wait('Frase 3', rand(1, 3));
//     });
// });

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(()=> {
            resolve(msg)
        }, tempo);
    });
}

wait('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return wait('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)
        return  wait(22222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta)   
    })
    .catch(e => {
        console.log('Error', e)
    })