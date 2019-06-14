import { Jugador2 } from './jugador2';

describe ('Jugador2 Emit', () => {
    let jugador: Jugador2;
    beforeEach(() =>  jugador = new Jugador2() );
    xit('Debe emitir un evento cuando recibe daño', () => {
        
        let nuevoHP = 0;
        
        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        } );
        jugador.recibeDanio(1000);
        expect(nuevoHP).toBe(0);
    });
    xit('Debe emitir un evento cuando recibe daño y sobrevivir si < 100', () => {
        
        let nuevoHP = 0;
        
        jugador.hpCambia.subscribe( hp => nuevoHP = hp );
        jugador.recibeDanio(50);
        expect(nuevoHP).toBe(50);
    });
});