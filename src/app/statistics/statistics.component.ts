import {Component, OnInit} from '@angular/core';
import {Chart} from './dto/chart';
import {TransactionService} from '../service/banks/transaction.service';
import {ActivatedRoute} from '@angular/router';
import {ChartSettings} from './dto/chart-settings';
import {Location} from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  charts: Chart[] = [
    new Chart([], new ChartSettings('Aantal transacties per dag (minimaal 1 transactie)',
      100, true, 'LineChart')),
    new Chart([], new ChartSettings('Aantal verstuurde transacties per tegenrekening (minimaal 1 transactie)',
      100, true, 'PieChart')),
    new Chart([], new ChartSettings('Aantal ontvangen transacties per tegenrekening (minimaal 1 transactie)',
      100, true, 'PieChart'))
  ];
  isLoading = true;
  hasTransactions = false;

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
      this.hasTransactions = transactions.transactions.length > 0;
      this.charts[0].data = this.groupTransactionsByDate(transactions.transactions);
      this.charts[1].data = this.groupTransactionsBySender(transactions.transactions);
      this.charts[2].data = this.groupTransactionsByReceiver(transactions.transactions);
    }, () => {
      this.isLoading = undefined;
      this.hasTransactions = false;
    });
  }

  groupTransactionsByDate(arr: any) {
    return this.groupTransactionBy('date', arr);
  }

  groupTransactionsBySender(arr: any) {
    return this.groupTransactionBy('sender', arr);
  }

  groupTransactionsByReceiver(arr: any) {
    return this.groupTransactionBy('receiver', arr);
  }

  // grootste spaghetti code dat ik ooit heb geschreven, maar het werkt
  groupTransactionBy(filterBy: string, array: any) {
    let mappedArray;

    if (array === null || array === undefined) {
      return array;
    }

    if (filterBy === 'date') {
      mappedArray = array.map(entity => entity.date);
    } else if (filterBy === 'sender') {
      array = array.filter(entity => entity.received === false);
      mappedArray = array.map(entity => entity.receiver.iban);
    } else if (filterBy === 'receiver') {
      array = array.filter(entity => entity.received === true);
      mappedArray = array.map(entity => entity.sender.iban);
    }
    return this.groupArray(mappedArray);
  }

  groupArray(array: any) {
    if (array === null || array === undefined) {
      return array;
    }

    const groupedArray = [];
    array.some((entity) => {
      let keyFoundInArray = false;
      if (groupedArray.length === 0) {
        groupedArray.push([entity, 0]);
      }
      groupedArray.forEach(_sum => {
        if (_sum[0] === entity) {
          _sum[1]++;
          keyFoundInArray = true;
        }
      });
      if (!keyFoundInArray) {
        if (!entity) {
          entity = 'Onbekend';
        }
        groupedArray.push([entity, 1]);
      }
    });
    return groupedArray.sort();
  }

  back() {
    this.location.back();
  }
}
