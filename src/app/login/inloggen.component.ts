import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {HttpResponse} from "@angular/common/http";

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

  constructor(private router: Router, private loginService: LoginService) {
  }

  onSubmit() {
      this.router.navigate(['overzicht/rekening']);
      //window.location.reload();
  }

  public login() {
    this.loginService.login(this.user);
  }

}
