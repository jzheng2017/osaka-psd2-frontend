import {Component} from '@angular/core';
import {Registration} from './registration';
import {Router} from '@angular/router';
import {RegistrationService} from '../service/registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    title = 'Registratie Formulier';

    submitted = false;

    user = new Registration('', '', '', '');

    constructor(private router: Router, private registrationService: RegistrationService) {
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


