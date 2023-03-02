function rand(min = 0, max = 3) {
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

// wait('Fase 1', rand(0, 3))
//     .then(valor =>{
//         console.log(valor)
//         return wait('Fase 2', rand())
//     })
//     .then(fase =>{
//         console.log(fase)
//         return wait('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log("terminamos na fase:", fase)
//     })
//     .catch(e => console.log(e))

async function execute() {
    try 
    {
        const fase1 = await wait('Fase 1', rand())
        console.log(fase1)
    
        const fase2 = await wait('Fase 2', rand())
        console.log(fase2)
    
        const fase3 = await wait('Fase 3', rand())
        console.log(fase3)
    
        console.log('terminamos na fase', fase3)
    } catch (e) {
        console.log(e)
    }
}

execute();