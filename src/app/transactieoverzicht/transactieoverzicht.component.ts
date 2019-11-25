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

    constructor(private transactionService: TransactionService) {
    }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions() {
        this.transactionService.getTransacties().subscribe(transactions => {
            this.transactions = transactions.transactions;
            console.log(transactions.transactions);
            for(let t of this.transactions){
                console.log(t.creditorAccount.name);
            }
            // console.log(this.transactions[1].creditorAccount.name);
            // console.log(this.transactions[2].creditorAccount.name);
            console.log(this.transactions);
        });
    }


}
