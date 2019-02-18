import { Pipe, PipeTransform } from '@angular/core';
import { NgIf } from '@angular/common';

@Pipe({
    name: 'contrasena'
})

export class ContrasenaPipe implements PipeTransform {
    transform( value: string, activar: boolean = true ): string {

        if ( activar ) {
            let salida = '';
            for ( let i = 0; i < value.length; i++ ) {
                salida += '*';
            }
            return salida;
        } else {
            return value;
        }
    }
}
