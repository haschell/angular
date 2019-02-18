import { Pipe, PipeTransform } from '@angular/core';
import { NgIf } from '@angular/common';

@Pipe({
    name: 'capitalizado'
})

export class NamePipe implements PipeTransform {
    transform( value: string, todas: boolean = true ): string {
        value = value.toLowerCase();
        const nombres = value.split(' ');
        if ( todas ) {
            for ( let i in nombres ) {
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1)
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }
        value = nombres.join(' ');
        return value;
    }
}
