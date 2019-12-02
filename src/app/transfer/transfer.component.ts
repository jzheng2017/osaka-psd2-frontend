import {Component, OnInit} from '@angular/core';
import {Transfer} from './transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transfer = new Transfer('', '', 0);

  constructor() {
  }

  ngOnInit() {
  }

}
