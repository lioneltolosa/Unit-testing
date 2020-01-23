import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassComponent } from './class.component';

describe('ClassComponent', () => {
    let component: ClassComponent;
    let fixture: ComponentFixture<ClassComponent>;

    beforeAll(() => {
        console.log('beforeAll', beforeAll)
    });

    beforeEach(() => {
        console.log('beforeEach', beforeEach)
    });

    afterAll(() => {
        console.log('afterAll', afterAll)
    });

    afterEach(() => {
        console.log('afterEach', afterEach)
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClassComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClassComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        const resp = component.recibeDanger(20);
        expect(resp).toBe(80);
    });

    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        const resp = component.recibeDanger(50);
        expect(resp).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe 100 de daño o mas', () => {
        const resp = component.recibeDanger(100);
        expect(resp).toBe(0);
    });
});
