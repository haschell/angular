import { usuarioIngresado } from './booleanos';
describe('Pruebas de booleanos', () => {
    it('Debe retornar TRUE', () => {
        expect(usuarioIngresado()).toBeTruthy();
    });
});