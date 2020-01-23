import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

    hp: number;

    constructor() {
        this.hp = 100;
    }

    recibeDanger(danger: number) {
        if(danger >= this.hp) {
            this.hp = 0;
        } else {
            this.hp -= danger;
        }

        return this.hp
    }

    ngOnInit() {
    }

}
