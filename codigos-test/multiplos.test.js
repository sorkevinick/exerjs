const multiplos = require("./mutiplos")

describe('Checar os Multiplos', () => {
    
    it('Verifica a somo dos números múltiplos de 5 ou 7 até 1000', () => {
        expect(multiplos()).toBe(156361)
    });
});