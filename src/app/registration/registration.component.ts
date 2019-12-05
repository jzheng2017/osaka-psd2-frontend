import {Component, OnInit} from '@angular/core';
import {Registration} from './dto/registration';
import {Router} from '@angular/router';
import {RegistrationService} from '../service/users/registration.service';
import {Title} from '@angular/platform-browser';
import {RegistrationRequest} from './dto/registrationrequests';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Registratie';
  error = false;
  submitted = false;
  user = new Registration('', '', '', '');

  constructor(private httpClient: HttpClient, private router: Router, private registrationService: RegistrationService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  onSubmit() {
    this.register();
  }

  register() {
      this.registrationService.register(this.user).subscribe(data => {
          if (data.token != null) {
              localStorage.setItem('token', data.token);
              this.router.navigate(['overzicht/rekeningen']);
          }
      }, err => {
          this.error = true;
      });
  }
}


