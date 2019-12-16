import {Component, OnInit} from '@angular/core';
import {Chart} from './dto/chart';
import {ChartSettings} from './dto/chart-settings';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  charts = [
    new Chart([
    ['12-05-2019', 1],
    ['12-06-2019', 2],
    ['12-07-2019', 3],
    ], new ChartSettings('Transacties Lijn grafiek', 500, true, 'LineChart')),
    new Chart([
      ['12-05-2019', 1],
      ['12-06-2019', 2],
      ['12-07-2019', 3],
    ], new ChartSettings('Transacties Taart grafiek', 500, true, 'PieChart'))
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
