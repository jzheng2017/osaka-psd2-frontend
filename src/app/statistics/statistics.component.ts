import {Component, OnInit} from '@angular/core';
import {Chart} from './dto/chart';
import {TransactionService} from '../service/banks/transaction.service';
import {ActivatedRoute} from '@angular/router';
import {ChartSettings} from './dto/chart-settings';
import {Location} from "@angular/common";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  charts: Chart[] = [new Chart([], new ChartSettings('Aantal transacties per dag (minimaal 1 transactie)', 100, true, 'LineChart'))];
  isLoading = true;

  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    const accountId = this.activatedRoute.snapshot.paramMap.get('id');
    const tableId = this.activatedRoute.snapshot.paramMap.get('tableid');
    this.transactionService.getTransactions(accountId, tableId).subscribe(transactions => {
      this.isLoading = false;
      this.charts[0].data = this.groupTransactionsByDate(transactions.transactions);
    }, () => {
      this.isLoading = undefined;
    });
  }

  groupTransactionsByDate(arr: any) {
    if (arr === null || arr === undefined) {
      return null;
    }
    console.log(arr);
    let dateArray = arr.map(entity => entity.date);
    let sum = [];
    dateArray.some((entity) => {
      let found = false;
      if (sum.length === 0) {
        sum.push([entity, 0]);
      }
      sum.forEach(_sum => {
        if (_sum[0] === entity) {
          _sum[1]++;
          found = true;
        }
      });
      if (!found) {
        if (!entity) {
          entity = 'Onbekende datum';
        }
        sum.push([entity, 1]);
      }
    });
    return sum;
  }

  back() {
    this.location.back();
  }
}
