const _ = require('lodash');

const interval = setInterval(() => {
    const numero = _.random(1, 10);
    console.log(numero);
    if (numero === 10) {
        console.log("O número é 10, não é mais aleatório!");
        clearInterval(interval);
    }
}, 2000);

