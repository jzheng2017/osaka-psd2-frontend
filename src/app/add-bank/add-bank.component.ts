import {Component, OnInit} from '@angular/core';
import {AddBank} from './dto/add-bank';
import {Location} from '@angular/common';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  private title = 'Bank koppelen';
  private bank = new AddBank('', '');
  private token = localStorage.getItem('token');
  private apiUrl = 'http://localhost:8080/connect';

  constructor(private location: Location, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  onSubmit(url: string) {
    this.goTo(url);
  }

  goTo(url: string) {
    window.location.href = url;
  }

  back() {
    this.location.back();
  }
}
