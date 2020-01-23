import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComponent } from './string.component';

describe('StringComponent', () => {
    let component: StringComponent;
    let fixture: ComponentFixture<StringComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StringComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have return a string', () => {
        const resp = component.testString('Lionel');
        expect( typeof resp ).toBe('string')
    });

    it('should retornan un saludo con el nombre enviado', () => {
        const resp = component.testString(`${name}`);
        expect( resp ).toContain(`${name}`)
    })
});
