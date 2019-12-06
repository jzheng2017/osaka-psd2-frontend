import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RekeningSettings} from './dto/rekening-settings';
import {RekeningcategoryService} from '../service/banks/rekeningcategory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rekening-settings',
  templateUrl: './rekening-settings.component.html',
  styleUrls: ['./rekening-settings.component.css']
})
export class RekeningSettingsComponent implements OnInit {

  private settings = new RekeningSettings('');
  // categorien: Category[];

  constructor(private location: Location, private categoryService: RekeningcategoryService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.settings);
    this.addCategory();
  }

  private addCategory() {
      this.categoryService.addCategory(this.settings).subscribe(data => {
          this.categorizeAccount(data.id);
      });
  }

  private categorizeAccount(id: number) {
      const iban = this.activatedRoute.snapshot.paramMap.get('id');
      this.categoryService.categorizeAccount(id, iban);
  }

}
