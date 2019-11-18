import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inloggen',
    templateUrl: './inloggen.component.html',
    styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {
    title = 'Registratie Formulier';


    user = new Login('', '');


    constructor(private router: Router) {
    }

    onSubmit() {
        this.router.navigate(['overzicht/rekening']);
    }

    ngOnInit() {
    }

}
