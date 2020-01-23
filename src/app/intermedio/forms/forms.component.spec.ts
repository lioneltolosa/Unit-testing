import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { FormBuilder } from '@angular/forms';

describe('FormsComponent', () => {
    let component: FormsComponent;
    /* let fixture: ComponentFixture<FormsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FormsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
 */
    beforeEach(() => {
        component = new FormsComponent( new FormBuilder());
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de crear un formulario con dos campos', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('El email debe de ser Obligatorio', () => {
        const control = component.form.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();
    });

    it('El email debe de ser un correo valido', () => {
        const control = component.form.get('email');
        control.setValue('dsdsd@gmail.com');

        expect(control.valid).toBeTruthy();
    });
});
