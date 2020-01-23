import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {
    let component: MedicosComponent;
    const service = new MedicosService(null);
    /* let fixture: ComponentFixture<MedicosComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ MedicosComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(MedicosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }); */

    beforeEach(() => {
        component = new MedicosComponent(service)
    })

    it('Init: Debe de cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn( service, 'getMedicos' ).and.callFake(() => {
            return Observable.from( [ medicos ] );
        }) 

        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);
    });
});
