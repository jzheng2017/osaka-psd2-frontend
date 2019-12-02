import {Component, OnInit} from '@angular/core';
import {AddBank} from './dto/add-bank';
import {Location} from '@angular/common';

@Component({
    selector: 'app-add-bank',
    templateUrl: './add-bank.component.html',
    styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {

    bank = new AddBank('', '');
    token = localStorage.getItem('token');

    constructor(private location: Location) {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.bank);
    }

    goTo(url: string) {
        window.location.href = url;
    }

    back() {
        this.location.back();
    }
}
