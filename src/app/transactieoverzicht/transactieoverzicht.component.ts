import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../service/banks/transaction.service';
import {Transaction} from '../transaction/dto/transaction';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-transactieoverzicht',
    templateUrl: './transactieoverzicht.component.html',
    styleUrls: ['./transactieoverzicht.component.css']
})
export class TransactieoverzichtComponent implements OnInit {

    transactions: Transaction[];
    isLoading = true;

    constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions() {
        this.transactionService.getTransacties(this.activatedRoute.snapshot.paramMap.get('id'), this.activatedRoute.snapshot.paramMap.get('tableid')).subscribe(transactions => {
            this.transactions = transactions.transactions;
            this.isLoading = false;
        });
    }


}
