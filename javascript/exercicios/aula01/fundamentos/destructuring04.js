function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // Inverte os valores
console.log(rand([992]));    // Usa o valor padrão para max
console.log(rand([, 10]));   // Usa o valor padrão para min
console.log(rand([]));       // Usa os valores padrão para min e max   
