import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysComponent } from './arrays.component';

describe('ArraysComponent', () => {
    let component: ArraysComponent;
    let fixture: ComponentFixture<ArraysComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArraysComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArraysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Debe retornar al menos 3 items', () => {
        const resp = component.testingArrays();
        expect(resp.length).toBeGreaterThanOrEqual(3)
    });

    it('Debe retornar Lionel y Mateo', () => {
        const resp = component.testingArrays();
        expect(resp).toContain('Lionel', 'Mateo')
    });
});
