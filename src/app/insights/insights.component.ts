import { Component, OnInit } from '@angular/core';
import {InsightsService} from '../service/banks/insights.service';
import {RekeningService} from '../service/banks/rekening.service';
import {Rekening} from '../rekening/dto/rekening';
import {Transaction} from '../transaction/dto/transaction';
import {NgxSpinnerService} from 'ngx-spinner';
import {Transactioncollection} from './dto/transactioncollection';
import {async} from 'q';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
    private filter = 'bedrag';
    private isLoading = true;

    private transactions: Transaction[][];
    private income;
    private expenses;
    private rekening;

    private accounts: Rekening[];
    private collections;
    private tegenrekening;

    constructor(private spinner: NgxSpinnerService, private rekeningService: RekeningService, private insightsService: InsightsService) {
    }

    ngOnInit() {
        this.spinner.show();
        this.getAllInsights();
    }


    getAllInsights() {
        this.isLoading = true;
        console.log('kaas');
        this.transactions = [];
        this.insightsService.getAllInsights().subscribe(data => {
            console.log(data.expectedIncome);
            this.transactions[0] = (data.expectedIncome);
            this.transactions[1] = (data.expectedExpenses);
            this.isLoading = false;
            this.income = data.totalExpectedIncome;
            this.expenses = data.totalExpectedExpenses;
        });
    }

    getInsightsPerAcc() {
        this.isLoading = true;
        this.collections = [];
        const token = localStorage.getItem('token');
        this.rekeningService.getRekeningen().subscribe(data => {
            this.accounts = data.accounts;
            for (const a of this.accounts) {
                this.insightsService.getInsightsOfAccount(a, token).subscribe(data2 => {
                    const index = this.getIndex(this.accounts, data2.account.iban);
                    const arr = data2.mixedExpected;
                    const coll = new Transactioncollection(arr);
                    this.collections[index] = coll;
                });
            }
            this.isLoading = false;
        });

    }

    getIndex(accounts, iban) {
        let i = 0;
        for (const a of accounts) {
            if (a.iban === iban) {
                return i;
            }
            i += 1;
        }
    }

    // wordt aangeroepen in insights.component.html
    getTegenRekening(t: Transaction) {
        if (t.received) {
            this.tegenrekening = t.sender;
        } else if (!t.received) {
            this.tegenrekening = t.receiver;
        }
    }

    getEigenRekening(t: Transaction) {
        if (t.received) {
            this.rekening = t.receiver;
        } else if (!t.received) {
            this.rekening = t.sender;
        }
    }



}
