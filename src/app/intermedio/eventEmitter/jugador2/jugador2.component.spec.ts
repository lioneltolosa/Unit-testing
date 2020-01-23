import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugador2Component } from './jugador2.component';

describe('Jugador2Component', () => {
    let component: Jugador2Component;
    let fixture: ComponentFixture<Jugador2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Jugador2Component]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Jugador2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe emitir un evento cuando el jugador recibe daño', () => {

        let newHp = 0
        component.hpChange.subscribe(hp => {
            newHp = hp;
        });

        component.recibeDanger(1000);

        expect(newHp).toBe(0);
    });

    it('Debe emitir un evento cuando el jugador recibe daño y sobrevivir si es menos de 100', () => {

        let newHp = 0
        component.hpChange.subscribe(hp => newHp = hp );

        component.recibeDanger(50);

        expect(newHp).toBe(50);
    });
});
