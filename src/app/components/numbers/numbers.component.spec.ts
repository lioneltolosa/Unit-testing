import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersComponent } from './numbers.component';

describe('NumbersComponent', () => {
    let component: NumbersComponent;
    let fixture: ComponentFixture<NumbersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NumbersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NumbersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {
        const resp = component.incrementNumber(200);
        expect(resp).toBe(100);
    });

    it('Debe retornar el numero ingresado + 1, si no es mayor a 100', () => {
        const resp = component.incrementNumber(20);
        expect(resp).toBe(21);
    });

    // Test Boolean
    it('Debe retornar true', () => {
        const resp = component.testingBoolean(true);
        expect(resp).toBe(true);
    });
});