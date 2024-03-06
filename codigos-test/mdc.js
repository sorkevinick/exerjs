const mdc = (a, b) => {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

let numero1 = 48;
let numero2 = 18;

let resultado = mdc(numero1, numero2);
console.log(`O MDC de ${numero1} e ${numero2} é: ${resultado}`);

module.exports  = mdc;