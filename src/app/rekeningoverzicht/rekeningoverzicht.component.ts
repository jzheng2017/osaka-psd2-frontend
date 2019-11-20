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

    rekeningen: Array<Rekening>;

    constructor(private rekeningService: RekeningService) {
    }

    ngOnInit() {
        this.rekeningen = this.getRekeningen();
        console.log(this.rekeningen);
    }

    getRekeningen(): Array<Rekening> {
        this.rekeningService.getRekeningen().subscribe(rekeningen => {
            console.log(rekeningen);
            //this.rekeningen = new Array<Rekening>(rekeningen.length);
            this.rekeningen = rekeningen;
            console.log(this.rekeningen);
            return this.rekeningen;
        });
        return this.rekeningen;
    }

}
