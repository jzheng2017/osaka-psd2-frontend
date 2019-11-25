import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RekeningService} from '../service/rekening.service';
import {Rekening} from './rekening';
import {Location} from '@angular/common';

@Component({
    selector: 'app-rekening',
    templateUrl: './rekening.component.html',
    styleUrls: ['./rekening.component.css']
})
export class RekeningComponent implements OnInit {

    rekening: Rekening;
    isLoading = true;

    constructor(private activtedRoute: ActivatedRoute, private location: Location, private rekeningService: RekeningService) {

    }

    ngOnInit() {
        this.getRekening(+this.activtedRoute.snapshot.paramMap.get('id'));
    }

    getRekening(id: number) {
        this.rekeningService.getRekening(id).subscribe(rekening => {
            this.rekening = rekening;
            this.isLoading = false;
        });
    }

    back() {
        this.location.back();
    }
}
