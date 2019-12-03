import { Component, OnInit } from '@angular/core';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {
  isLoading = true;
  rekeningen: Rekening[];
  totalBalance: number;

  constructor(private rekeningService: RekeningService) { }

  ngOnInit() {
    this.getRekeningen();

  }

  getRekeningen() {
    this.rekeningService.getRekeningen().subscribe(rekeningen => {
        this.rekeningen = rekeningen.accounts;
        this.totalBalance = rekeningen.balance;
        this.isLoading = false;
      }
    );
  }

}
