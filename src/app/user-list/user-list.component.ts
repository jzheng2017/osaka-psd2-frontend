import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';
import {Users} from '../users';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: User[];
    response: Subscription;

    users2: Promise<Users>;
    l: Array<any> = new Array<any>(2);

  constructor(private us: UserService, private r: Router) { }

  ngOnInit() {
      // this.reloadData();
      //this.response = this.reloadData2();
      // this.reloadData();
      // console.log(this.users);

      const user = new User();
      //this.users2 = this.us.newPlaylist();
      this.us.newPlaylist(this.l);
      console.log(this.l[0]);
      //console.log(this.users2);
  }

  reloadData() {
      //this.users = this.us.getUsers().subscribe();
  }

  reloadData2() {
      return this.us.getAllUsers().subscribe();
  }

}
