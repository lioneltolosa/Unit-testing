import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesComponent, RUTAS } from './routes.component';
import { HospitalComponent } from 'src/app/intermedio2/hospital/hospital.component';

describe('RoutesComponent', () => {
    let component: RoutesComponent;
    let fixture: ComponentFixture<RoutesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RoutesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RoutesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de existir la ruta /hospital', () => {
        expect(RUTAS).toContain({
            path: 'hospital', component: HospitalComponent
        });
    });
});
