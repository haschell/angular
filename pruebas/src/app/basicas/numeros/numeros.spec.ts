import { incrementar } from './numeros';
describe('Pruebas de numeros', () => {
    it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {
        expect(incrementar(300)).toBe(100);
    });

    it('Debe retornar el número ingresado + 1 si no es mayor a 100', () => {
        expect(incrementar(50)).toBe(51);
    });

});