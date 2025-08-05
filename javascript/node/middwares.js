//Middware pattern (chain of responsibility)
const passo1 = (ctx, next) =>{
    ctx.valor = 'mid1';
    next();
}

const passo2 = (ctx, next) =>{
    ctx.valor = 'mid2';
    next();
}

const passo3 = (ctx) =>{
    ctx.valor = 'mid3';
}


const exec = (ctx, ...middlewares) => {
    execPasso = (indice) => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx.valor); // mid3
// The context object is modified by the middlewares, and the final value is 'mid3