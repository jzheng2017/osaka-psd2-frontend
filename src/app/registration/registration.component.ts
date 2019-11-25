import {Component} from '@angular/core';
import {Registration} from './registration';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    title = 'Registratie Formulier';

    submitted = false;

    user = new Registration('', '', '');

    constructor(private router: Router) {
    }

    onSubmit() {
        this.submitted = true;
        setTimeout(() => this.router.navigate(['login']), 5000);
    }

    register() {
    }

    newUser() {
        this.user = new Registration('', '', '');
    }
}
