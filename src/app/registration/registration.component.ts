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

    user = new Registration('', '', '');

    constructor(private router: Router, private registreerService: RegistrationService) {
    }

    onSubmit() {
        this.submitted = true;
        setTimeout(() => this.router.navigate(['login']), 5000);
    }

    public register() {
      this.registreerService.register(this.user);
    }

}
