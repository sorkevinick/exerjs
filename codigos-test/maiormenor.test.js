const encontrarMaiorMenor = require("./miormenor")

describe('Encontrar o menor e maior valor dentro do Array', () => {
    
    it('Encontrar corretamente os maiores e menores valores', () => {
        const { maior, menor } = encontrarMaiorMenor([4, 7, 3, 5, 9, 8, 1, 2, 6]);
        expect(maior).toBe(9);
        expect(menor).toBe(1);
    });
});