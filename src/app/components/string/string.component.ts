import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-string',
    templateUrl: './string.component.html',
    styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    testString(name: string) {
        return `Saludos ${name}`;
        // return  true;
    }

}
