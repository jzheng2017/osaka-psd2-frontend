import {Component, OnInit} from '@angular/core';
import {AddBank} from "./add-bank";
import {RekeningService} from "../service/rekening.service";

@Component({
    selector: 'app-add-bank',
    templateUrl: './add-bank.component.html',
    styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

    bank = new AddBank('', '');

    constructor(private rekeningService: RekeningService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.rekeningService.addRekening(this.bank);
    }
}
