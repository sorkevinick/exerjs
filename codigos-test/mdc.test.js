const mdc = require('./mdc')

describe('Teste de Máximo Divisor Comum', () => {
    it('mdc de dois valores', () => {
        expect(mdc(48, 18)).toBe(6)
        expect(mdc(100, 10)).toBe(10)
        expect(mdc(0, 0)).toBe(0)
    });
});