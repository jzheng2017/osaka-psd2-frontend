import {Component, OnInit} from '@angular/core';
import {Login} from './dto/login';
import {LoginService} from '../service/users/login.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-inloggen',
  templateUrl: './inloggen.component.html',
  styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {
  title = 'Login';


  user = new Login('', '');

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  constructor(private loginService: LoginService, private titleService: Title) {
  }

  onSubmit() {
    this.login();
  }

  public login() {
    this.loginService.login(this.user);
  }


}



