import {Component, OnInit} from '@angular/core';
import {Transfer} from './transfer';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {Location} from '@angular/common';
import {TransactionService} from '../service/banks/transaction.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transfer = new Transfer(null, {iban: '', name: ''}, 0, 'EUR', '');
  rekeningen: Rekening[];
  selectedRekening = {iban: '', tableId: ''};
  isLoading = true;
  transfered = undefined;

  constructor(private rekeningService: RekeningService, private transactionService: TransactionService, private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('success') === 'true') {
      this.transfered = true;
    }
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
    this.transactionService.createTransaction(this.transfer, this.transfer.sender.tableId)
      .subscribe(response => {
          return window.location.href = response.url;
        },
        () => this.transfered = false);
  }
}
