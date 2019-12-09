import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthService} from './service/auth/auth.service';
import {UserService} from "./service/users/user.service";
import {NavigationEnd, Router} from "@angular/router";
import {ConfigService} from "./service/config/config.service";
import {config} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osakapsd2-front-end';
  isLoggedIn;

  constructor(private titleService: Title, private authService: AuthService, private userService: UserService, private router: Router, private configService: ConfigService) {
    titleService.setTitle(this.title);
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isLoggedIn = this.authService.isAuthenticated();
      }
    });
    configService.loadConfig();
  }


}

