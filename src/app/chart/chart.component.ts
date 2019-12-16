import {Component, Input, OnInit} from '@angular/core';
import {Chart} from './dto/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() chart: Chart;

  constructor() {
  }

  ngOnInit() {
  }

}
