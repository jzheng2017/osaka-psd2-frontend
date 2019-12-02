import {Component, OnInit} from '@angular/core';
import {Registration} from './dto/registration';
import {Router} from '@angular/router';
import {RegistrationService} from '../service/users/registration.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Registratie';

  submitted = false;

  user = new Registration('', '', '', '');

  constructor(private router: Router, private registrationService: RegistrationService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  onSubmit() {
    this.register();
  }

  register() {
    this.registrationService.register(this.user);
  }

  newUser() {
    this.user = new Registration('', '', '', '');
  }
}


