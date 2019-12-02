import {Component, OnInit} from '@angular/core';
import {Login} from './dto/login';
import {LoginService} from '../service/users/login.service';

@Component({
    selector: 'app-inloggen',
    templateUrl: './inloggen.component.html',
    styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {
  title = 'Registratie Formulier';


  user = new Login('', '');

  ngOnInit() {
  }

  constructor(private loginService: LoginService) {
  }

  onSubmit() {
    this.login();
  }

  public login() {
    this.loginService.login(this.user);
  }


}
