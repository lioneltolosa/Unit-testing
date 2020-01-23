import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-jugador2',
    templateUrl: './jugador2.component.html',
    styleUrls: ['./jugador2.component.scss']
})
export class Jugador2Component implements OnInit {

    hp: number;
    hpChange = new EventEmitter<number>();

    constructor() {
        this.hp = 100;
    }

    recibeDanger(danger: number) {
        if (danger >= this.hp) {
            this.hp = 0;
        } else {
            this.hp -= danger;
        }

        // return this.hp
        this.hpChange.emit( this.hp );
    }

    ngOnInit() {
    }

}
