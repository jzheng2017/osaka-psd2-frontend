import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../service/transaction.service';
import {Transaction} from '../transaction';

@Component({
    selector: 'app-transactieoverzicht',
    templateUrl: './transactieoverzicht.component.html',
    styleUrls: ['./transactieoverzicht.component.css']
})
export class TransactieoverzichtComponent implements OnInit {

    transactions: Transaction[];
    isLoading = true;

    constructor(private transactionService: TransactionService) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions() {
        this.transactionService.getTransacties().subscribe(transactions => {
            this.transactions = transactions;
            this.isLoading = false;
        });
    }


}
