import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {RekeningService} from '../service/banks/rekening.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ConfigService} from '../service/config/config.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  private title = 'Bank koppelen';
  private connectUrl = `${this.configService.apiBaseUrl}/connect`;

  private allowedConnections;
  private limitReached;
  private isLoading = true;

  private banks;

  constructor(private rekeningService: RekeningService,
              private location: Location,
              private titleService: Title,
              private spinner: NgxSpinnerService,
              private configService: ConfigService) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.getBanks();
    if (this.isLoading) {
      this.spinner.show();
    }
    this.getConnections();
  }

  onSubmit(url: string) {
    const token = localStorage.getItem('token');
    this.goTo(this.connectUrl + '/' + url + '?token=' + token);
  }

  goTo(url: string) {
    window.location.href = url;
  }

  back() {
    this.location.back();
  }

  getBanks() {
    this.rekeningService.getBanks().subscribe(data => {
      this.banks = data;
    });
  }

  getConnections() {
    this.rekeningService.getConnections().subscribe(connections => {
      this.allowedConnections = connections.allowedConnections;
      this.limitReached = connections.limitReached;
      this.isLoading = false;
    }, err => {
      console.log(err);
    });
  }
}
