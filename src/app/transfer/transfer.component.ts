import {Component, OnInit} from '@angular/core';
import {Transfer} from './transfer';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transfer = new Transfer('', '', 0);
  rekeningen: Rekening[];
  isLoading = true;

  constructor(private rekeningService: RekeningService) {
  }

  ngOnInit() {
    this.getRekeningen();
  }

  getRekeningen() {
    this.rekeningService.getRekeningen().subscribe(rekeningen => {
      this.rekeningen = rekeningen.accounts;
      this.isLoading = false;
    });
  }
}