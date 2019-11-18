import {Component} from '@angular/core';
import {Registration} from '../registration';
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    title = 'Registratie Formulier';

    submitted = false;

    user = new Registration('','');

    onSubmit() {
        this.submitted = true;
    }

    register() {
    }

    newUser() {
        this.user = new Registration('','');
    }
}
