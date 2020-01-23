import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
    selector: 'app-medicos',
    templateUrl: './medicos.component.html',
    styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

    public medicos: any[] = [];
    public mensajeError: string;

    constructor(public _medicoService: MedicosService) { }

    ngOnInit() {
        this._medicoService.getMedicos()
            .subscribe( (medicos:any ) => this.medicos = medicos )
    }

    agregarMedico() {
        const medicos = { name: 'Medico Andrea Maria' };
        
        this._medicoService.agregarMedico(medicos)
            .subscribe(medicoDB => {
                this.medicos.push(medicoDB),
                err => this.mensajeError = err
            });
    }

   /*  borrarMedico( id: any) {
        const confirm = confirm('Estas seguro que quieres borrar este medico');
        if(confirm) {
            this._medicoService.borrarMedico(id);
        }
    } */

}
