import { Component, OnInit } from '@angular/core';
import {InsightsService} from '../service/banks/insights.service';
import {ActivatedRoute} from '@angular/router';
import {Rekening} from '../rekening/dto/rekening';
import {Transaction} from '../transaction/dto/transaction';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-rekening-insights',
  templateUrl: './rekening-insights.component.html',
  styleUrls: ['./rekening-insights.component.css']
})
export class RekeningInsightsComponent implements OnInit {
  private transactions;
  private rekening;
  private tegenrekening;
  private isLoading = true;

  constructor(private insightsService: InsightsService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getInsights();
  }

  getInsights() {
    const token = localStorage.getItem('token');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const tableid = this.activatedRoute.snapshot.paramMap.get('tableid');
    const iban = this.activatedRoute.snapshot.paramMap.get('iban');
    this.rekening = new Rekening(id, tableid, iban, '', 0, '');
    this.insightsService.getInsightsOfAccount(this.rekening, token).subscribe(data => {
      // @ts-ignore
        this.transactions = data.mixedExpected;
        this.isLoading = false;
    });
  }

    getTegenRekening(t: Transaction) {
        if (t.received) {
            this.tegenrekening = t.sender;
        } else if (!t.received) {
            this.tegenrekening = t.receiver;
        }
    }


}
