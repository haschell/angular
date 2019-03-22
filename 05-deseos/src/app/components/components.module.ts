import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule, AlertController } from '@ionic/angular';
import { DeseosService } from '../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../models/lista.model';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListasComponent],
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule {

  constructor (  ) {
  }
}
