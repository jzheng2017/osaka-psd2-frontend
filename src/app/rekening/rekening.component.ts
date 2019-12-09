import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RekeningService} from '../service/banks/rekening.service';
import {Rekening} from './dto/rekening';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rekening',
  templateUrl: './rekening.component.html',
  styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

  account = {iban: '', balance: 0, type: ''};
  isLoading = true;

  constructor(private activtedRoute: ActivatedRoute, private location: Location, private rekeningService: RekeningService) {
  }

  ngOnInit() {
    // this.getRekening(+this.activtedRoute.snapshot.paramMap.get('id'));
  }

  // getRekening(id: number) {
  //     this.rekeningService.getRekening(id).subscribe(rekening => {
  //         this.rekening = rekening;
  //         this.isLoading = false;
  //     });
  // }

  back() {
    this.location.back();
  }

  getAccount($event: any) {
    this.isLoading = false;
    this.account = $event;
  }
}
