import { Component, OnInit } from '@angular/core';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {UserService} from '../service/users/user.service';
import {User} from '../user';
import {Account} from '../account';

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

  constructor(private rekeningService: RekeningService, private userService: UserService)  { }

  ngOnInit() {
    this.getUserDetails();
    this.getAttachedBankAccounts();
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

  getAttachedBankAccounts() {
    this.userService.getAttachedBankAccounts().subscribe( data => {this.accounts = data;
                                                                   console.log(this.accounts); });
  }

  getUserDetails() {
    this.userService.getUser().subscribe(data => {this.user = data; });

  }

}
