/*function compras (){
    const trabalho1 = false;
    const trabalho2 = false;
    if (trabalho1 === true && trabalho2 === true) {
        return('Comprar TV de 50 polegadas');
    }
    else if(trabalho1 === false || trabalho2 === false) {
        return('Comprar TV de 32 polegadas');
    } else {
        return('Comprar nada');
    }
}

console.log(compras());*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    
   return{ comprarSorvete, 
           comprarTV50, 
           comprarTV32, 
           manterSaudavel 
         };
}

console.log(compras(true, true)); // { comprarSorvete: true, comprarTV50: true, comprarTV32: false, manterSaudavel: false }
console.log(compras(true, false)); // { comprarSorvete: true, comprarTV50: false, comprarTV32: true, manterSaudavel: false }
console.log(compras(false, true)); // { comprarSorvete: true, comprarTV50   : false, comprarTV32: true, manterSaudavel: false }
console.log(compras(false, false)); // { comprarSorvete: false, comprarTV50: false, comprarTV32: false, manterSaudavel: true }  

