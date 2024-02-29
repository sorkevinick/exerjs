let numeros = [4, 7, 3, 5, 9, 8, 1, 2, 6];

let maior =  numeros[0] // Assume o primeiro elemento é o maior
let menor =  numeros[0] // Assume que o primeiro é o menor

numeros.forEach(element => {
    if (maior < element) {
        maior = element
    } else if(menor > element){
        menor = element
    }
})
console.log(`O maior número do Array é ${maior}`)
console.log(`O menor número do Array é  ${menor}`)
