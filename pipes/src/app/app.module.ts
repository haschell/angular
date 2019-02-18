import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { NamePipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/oculto.pipe';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
registerLocaleData(localeEs);
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, NamePipe, DomseguroPipe, ContrasenaPipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
