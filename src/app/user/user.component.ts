import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: User = {
        id : 1,
        email : 'email',
        password : 'password',
    };

  constructor(private us: UserService) { }

  ngOnInit() {
  }

}
