import { Jugador } from './clase';
describe('Pruebas de clase', () => {
    let jugador = new Jugador();

    beforeAll( () => {
        console.log('beforeAll');
    });
    beforeEach( () => {
        console.log('beforeEach');
            jugador.hp = 100;
            jugador = new Jugador();
    });
    afterAll( () => {
        console.log('afterAll');
    });
    afterEach( () => {
        console.log('afterEach');
    });

    it('Debe retornar 80 de HP si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    });

    it('Debe retornar 50 de HP si recibe 50 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    });

        it('Debe retornar 0 de HP si recibe 100 de daño o mas', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(101);
        expect(resp).toBe(0);
    });
});