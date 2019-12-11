import {Component, OnInit} from '@angular/core';
import {Transaction} from './dto/transaction';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../service/banks/transaction.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction: Transaction;
  isLoading = true;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.getTransaction(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getTransaction(id: number) {
    this.transactionService.getTransaction(id).subscribe(transaction => {
      this.transaction = transaction;
      this.isLoading = false;
    });
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    this.transactionService.updateTransaction(this.transaction).subscribe(() => this.location.back());
  }
}
