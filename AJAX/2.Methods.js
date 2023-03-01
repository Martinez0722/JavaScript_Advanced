function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){ 
            reject('Cai no erro')
            return;
        };

        setTimeout(()=> {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo);
    });
}

// const promises = [
//     // 'First value',
//     wait('Promise 1', rand(1, 5)),
//     wait('Promise 2', rand(1, 5)),
//     wait('Promise 3', rand(1, 5)),
//     wait(1000, 1000),
//     // 'Outro valor'
// ];

//Promise.all
// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor)
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// Promise.race
// Promise.race(promises)
//     .then((valor) => {
//         console.log(valor)
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// Promise.resolve

// function  baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.resolve('Página em cache')
//     } else {
//         return wait ('Baixei a página', 3000);
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina)
//     })
//     .catch(e => console.log(e))

// Promise.reject

function  baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache')
    } else {
        return wait ('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro', e))