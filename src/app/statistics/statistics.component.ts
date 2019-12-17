import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  data = [
    ['12-04-2019', 5],
    ['12-05-2019', 7],
    ['12-06-2019', 10]
  ];
  title = 'Transacties';
  height = 500;
  dynamicResize = true;
  chartType = 'LineChart';

  constructor() {
  }

  ngOnInit() {
  }

}
