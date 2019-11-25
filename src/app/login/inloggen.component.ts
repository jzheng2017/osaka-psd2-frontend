import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';
import {InloggenService} from '../service/inloggen.service';

@Component({
    selector: 'app-inloggen',
    templateUrl: './inloggen.component.html',
    styleUrls: ['./inloggen.component.css']
})
export class InloggenComponent implements OnInit {
    title = 'Registratie Formulier';


    user = new Login('', '');


    constructor(private router: Router, private inloggenService: InloggenService) {
    }

    onSubmit() {
        this.router.navigate(['overzicht/rekening']);
        console.log(this.user.email);
        console.log(this.user.password);
    }

    ngOnInit() {
    }

  public login(): void {
  }

}
