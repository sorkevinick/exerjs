// findLargestSmallest.js

function encontrarMaiorMenor(numbers) {
    let maior = numbers[0]; // Assume o primeiro elemento é o maior
    let menor = numbers[0]; // Assume que o primeiro é o menor

    numbers.forEach(element => {
        if (maior < element) {
            maior = element;
        } else if (menor > element) {
            menor = element;
        }
    });

    return { maior, menor };
}

module.exports = encontrarMaiorMenor;
