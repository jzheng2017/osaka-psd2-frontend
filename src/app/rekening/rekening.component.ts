import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from './rekening';

@Component({
    selector: 'app-rekening',
    templateUrl: './rekening.component.html',
    styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

    @Input() rekening: Rekening;

    constructor() {
    }

    ngOnInit() {
    }

}
