import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RekeningSettings} from "./dto/rekening-settings";

@Component({
  selector: 'app-rekening-settings',
  templateUrl: './rekening-settings.component.html',
  styleUrls: ['./rekening-settings.component.css']
})
export class RekeningSettingsComponent implements OnInit {

  private settings = new RekeningSettings('');

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.settings);
  }
}
