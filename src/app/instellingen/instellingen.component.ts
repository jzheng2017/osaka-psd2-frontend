import { Component, OnInit } from '@angular/core';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {UserService} from '../service/users/user.service';
import {User} from '../user';
import {Account} from '../account';
import {Spinner} from 'ngx-spinner/lib/ngx-spinner.enum';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {
  isLoading = true;
  rekeningen: Rekening[];
  totalBalance: number;
  user: User;
  accounts: Account[];

  constructor(private rekeningService: RekeningService, private userService: UserService, private spinner: NgxSpinnerService)  { }

  ngOnInit() {
    this.getUserDetails();
    this.getAttachedBankAccounts();
    // this.getRekeningen();
    this.spinner.show();
  }

  getRekeningen() {
    this.rekeningService.getRekeningen().subscribe(rekeningen => {
        this.rekeningen = rekeningen.accounts;
        this.totalBalance = rekeningen.balance;
        this.isLoading = false;
      }
    );
  }

  getAttachedBankAccounts() {
    this.userService.getAttachedBankAccounts().subscribe( data => {
        this.accounts = data;
        this.isLoading = true;
        console.log(this.accounts); });
  }

  getUserDetails() {
    this.userService.getUser().subscribe(data => {this.user = data; });
  }

  disconnectAccount(id: number) {
      this.userService.disconnectBankAccount(id);

  }

}
