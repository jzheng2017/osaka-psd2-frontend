import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from '../rekening/rekening';
import {RekeningService} from '../service/rekening.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TextAnimation} from 'ngx-teximate';
import {fadeInDown} from 'ng-animate';

@Component({
    selector: 'app-rekeningoverzicht',
    templateUrl: './rekeningoverzicht.component.html',
    styleUrls: ['./rekeningoverzicht.component.css'],
})
export class RekeningoverzichtComponent implements OnInit {
    rekeningen: Rekening[];
    totalBalance: number;
    isLoading = true;

    constructor(private rekeningService: RekeningService, private spinner: NgxSpinnerService) {
    }

    ngOnInit() {
        this.getRekeningen();
        this.spinner.show();
    }




    getRekeningen() {
        this.rekeningService.getRekeningen().subscribe(rekeningen => {
                this.rekeningen = rekeningen.accounts;
                this.totalBalance = rekeningen.balance;
                this.isLoading = false;
            }
        );
    }

}


