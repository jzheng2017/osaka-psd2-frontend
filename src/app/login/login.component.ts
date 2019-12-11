import {Component, OnInit} from '@angular/core';
import {Login} from './dto/login';
import {LoginService} from '../service/users/login.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inloggen',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';

  error = false;

  user = new Login('', '');

  constructor(private loginService: LoginService, private titleService: Title, private router: Router) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  onSubmit() {
    this.login();
  }

  public login() {
    this.loginService.login(this.user).subscribe(data => {
        if (data.token != null) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['overzicht/rekening']);
        }
      }, () => {
        this.error = true;
      }
    );
  }


}



