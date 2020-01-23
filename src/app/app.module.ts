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
import { MedicosComponent } from './intermedio/espias/medicos/medicos.component';

@NgModule({
  declarations: [
    AppComponent,
    StringComponent,
    NumbersComponent,
    ArraysComponent,
    ClassComponent,
    Jugador2Component,
    FormsComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
