import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-rekening-settings',
  templateUrl: './rekening-settings.component.html',
  styleUrls: ['./rekening-settings.component.css']
})
export class RekeningSettingsComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }
}
