import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from '../rekening/rekening';

@Component({
    selector: 'app-rekeningoverzicht',
    templateUrl: './rekeningoverzicht.component.html',
    styleUrls: ['./rekeningoverzicht.component.css']
})
export class RekeningoverzichtComponent implements OnInit {
    rekeningen: Rekening[] = [
        {id: '1', name: 'Rabobank', balance: 123},
        {id: '1', name: 'Rabobank', balance: 123},
        {id: '1', name: 'Rabobank', balance: 123},
        {id: '1', name: 'Rabobank', balance: 123},
    ];

    ngOnInit() {
    }

    getRekeningen() {

    }

}
