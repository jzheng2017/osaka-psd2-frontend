import {Component, OnInit} from '@angular/core';
import {Transfer} from './transfer';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {Location} from '@angular/common';
import {TransactionService} from '../service/banks/transaction.service';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transfer = new Transfer({iban: ''}, {iban: '', name: ''}, 0, '', '');
  rekeningen: Rekening[];
  selectedRekening = {iban: '', tableId: ''};
  isLoading = true;
  transfered = undefined;

  constructor(private rekeningService: RekeningService, private transactionService: TransactionService, private location: Location) {
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

  back() {
    this.location.back();
  }

  onSubmit() {
    this.transfer.sender.iban = this.selectedRekening.iban;
    this.transactionService.createTransaction(this.transfer, this.selectedRekening.tableId)
      .subscribe(response => {
          return window.location.href = response.url;
        },
        () => this.transfered = false);
  }
}
