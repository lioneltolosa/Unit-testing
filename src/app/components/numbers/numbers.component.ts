import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    incrementNumber(number: number) {
        if(number > 100) {
            return 100;
        } else {
            return number + 1;
        }
    }

    // Test Boolean
    testingBoolean(value: boolean) {
        return true;
    }
}