import {Component, OnInit} from '@angular/core';
import {RekeningService} from '../service/banks/rekening.service';
import {UserService} from '../service/users/user.service';
import {User} from '../login/dto/user';
import {Account} from '../rekening/dto/account';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {
  isLoading = true;
  user: User;
  accounts: Account[];
  error = '';

  constructor(private rekeningService: RekeningService, private userService: UserService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.getUserDetails();
    this.getAttachedBankAccounts();
    if (this.isLoading) {
      this.spinner.show();
    }
  }

  getAttachedBankAccounts() {
    this.userService.getAttachedBankAccounts().subscribe(data => {
      this.accounts = data;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      this.error += 'Het ophalen van de rekeningen is mislukt. ';
    });
  }

  getUserDetails() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    }, err => {
      this.isLoading = false;
      this.error += 'Het ophalen van de accountgegevens is mislukt. ';
    });
  }

  disconnectAccount(id: number) {
    if (this.unlinkAccount()) {
      this.userService.disconnectBankAccount(id).subscribe(() => this.getAttachedBankAccounts(),
        err => {
          this.error = '(' + err.status + ') Het ontkoppelen is mislukt. ';
        });
    }
  }

  unlinkAccount() {
    return confirm('Weet je zeker dat je deze rekening wilt ontkoppelen?');
  }
}
