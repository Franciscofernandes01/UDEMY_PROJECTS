const tipoTriangulo = function (a,b,c){
    if(a == b && a == c){
        return "Equilátero";
    }else if (a == b && a != c || a == c && a!= b || b == c && b != a){
        return "Isósceles";
    }else{
        return "Escaleno";
    }
}

console.log(tipoTriangulo(2,2,2));
console.log(tipoTriangulo(2,2,3));
console.log(tipoTriangulo(2,3,4));