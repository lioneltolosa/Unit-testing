import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringComponent } from './components/string/string.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { ArraysComponent } from './components/arrays/arrays.component';
import { ClassComponent } from './components/class/class.component';
import { Jugador2Component } from './intermedio/eventEmitter/jugador2/jugador2.component';
import { FormsComponent } from './intermedio/forms/forms.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { RoutesComponent } from './avanzado/routes/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    StringComponent,
    NumbersComponent,
    ArraysComponent,
    ClassComponent,
    Jugador2Component,
    FormsComponent,
    HospitalComponent,
    RoutesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
