import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from '../rekening/rekening';
import {RekeningService} from '../service/rekening.service';
import {stringify} from 'querystring';

@Component({
    selector: 'app-rekeningoverzicht',
    templateUrl: './rekeningoverzicht.component.html',
    styleUrls: ['./rekeningoverzicht.component.css']
})
export class RekeningoverzichtComponent implements OnInit {

    rekeningen: Rekening[];

    constructor(private rekeningService: RekeningService) {
    }

    ngOnInit() {
        this.getRekeningen();
    }

    getRekeningen() {
        this.rekeningService.getRekeningen().subscribe(rekeningen => {
            console.log(rekeningen);
            this.rekeningen = rekeningen.accounts;
            console.log(this.rekeningen);
        });
    }

}
