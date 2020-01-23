import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from 'src/app/intermedio2/hospital/hospital.component';
import { MedicosComponent } from 'src/app/intermedio/espias/medicos.component';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

export const RUTAS: Routes = [
    {path: 'hospital', component: HospitalComponent},
    {path: 'medico/id', component: MedicosComponent}
]
