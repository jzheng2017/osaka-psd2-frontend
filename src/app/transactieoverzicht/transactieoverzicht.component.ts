import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../service/banks/transaction.service';
import {Transaction} from '../transaction/dto/transaction';
import {ActivatedRoute} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-transactieoverzicht',
  templateUrl: './transactieoverzicht.component.html',
  styleUrls: ['./transactieoverzicht.component.css']
})
export class TransactieoverzichtComponent implements OnInit {

  transactions: Transaction[];
  isLoading = true;
  private title = 'Transactieoverzicht';
  error = '';

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getTransactions();
  }

  getTransactions() {
    const bankAccountId = this.activatedRoute.snapshot.paramMap.get('id');
    const tableId = this.activatedRoute.snapshot.paramMap.get('tableid');

    this.transactionService.getTransacties(bankAccountId, tableId).subscribe(transactions => {
      this.transactions = transactions.transactions;
      this.isLoading = false;
      console.log(this.transactions);
    }, err => {
        this.error = err.error.errorMessage;
    });
  }
}

