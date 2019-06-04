import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChartsModule } from "ng2-charts";
import { LineaComponent } from "./components/linea/linea.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [AppComponent, LineaComponent, BarraComponent, DonaComponent, RadarComponent],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
