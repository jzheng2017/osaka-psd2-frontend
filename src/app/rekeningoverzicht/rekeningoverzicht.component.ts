import {Component, Input, OnInit} from '@angular/core';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-rekeningoverzicht',
  templateUrl: './rekeningoverzicht.component.html',
  styleUrls: ['./rekeningoverzicht.component.css']
})
export class RekeningoverzichtComponent implements OnInit {
  private title = 'Rekeningoverzicht';
  rekeningen: Rekening[];
  totalBalance: number;
  isLoading = true;

  constructor(private rekeningService: RekeningService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
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
