import { obtenerRobots } from './arreglos';
describe('Pruebas de arreglos', () => {
    it('Debe retornar al menos 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Deben existir Megaman y Ultron', () => {
        const res = obtenerRobots();
        expect(res ).toContain('Megaman');
        expect(res ).toContain('Ultron');
    });
    

});