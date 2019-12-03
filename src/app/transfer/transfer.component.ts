import {Component, OnInit} from '@angular/core';
import {Transfer} from './transfer';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public transfer = new Transfer('', '', '', 0);
  rekeningen: Rekening[];
  isLoading = true;
  transfered = undefined;

  constructor(private rekeningService: RekeningService, private location: Location) {
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
    /**
     * Op dit moment wordt er nog een random boolean gegenereerd en op basis daarvan een fout of succesmelding getoond.
     * Dit moet vervangen worden met een echte HTTP request naar de backend
     */
    this.transfered = Math.random() >= 0.5;
  }
}
