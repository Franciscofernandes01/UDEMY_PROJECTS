/*### 06) Juros Simples e Compostos

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
 retornará o valor da aplicação sob o regime de juros compostos.*/ 

 let juros = function(valor,taxa,tempo){
    let montante = Number(valor) *(1+taxa*tempo);
    let montanteComposto = Number(valor) * (1+taxa)**tempo;
    return `O montante da aplicação financeira sob o regime de juros simples é: R$${montante.toFixed(2).replace('.', ',')}, e no regime de juros compostos é: R$${montanteComposto.toFixed(2).replace('.', ',')}`;
 }

 console.log(juros(1000,0.05,2));