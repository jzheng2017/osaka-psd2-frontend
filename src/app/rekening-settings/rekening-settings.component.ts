import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RekeningSettings} from './dto/rekening-settings';
import {RekeningcategoryService} from '../service/banks/rekeningcategory.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from './dto/category';

@Component({
  selector: 'app-rekening-settings',
  templateUrl: './rekening-settings.component.html',
  styleUrls: ['./rekening-settings.component.css']
})
export class RekeningSettingsComponent implements OnInit {
  categories: Category[];
  public categoryId: number;
  option = 'iban';
  private settings = new RekeningSettings('');

  // categorien: CategoryRequest[];

  constructor(private location: Location, private categoryService: RekeningcategoryService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.getCategories();
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    if (this.option === 'categorize') {
      this.categorizeAccount(this.categoryId);
    } else if (this.option === 'new') {
      this.addCategory();
    }
  }

  private getCategories() {
    this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      }
    );
  }

  private addCategory() {
    this.categoryService.addCategory(this.settings).subscribe(data => {
      this.categorizeAccount(data.id);
    });
  }

  private categorizeAccount(id: number) {
    const iban = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoryService.categorizeAccount(id, iban);
    alert('De rekening is succesvol gecategoriseerd.');
    this.back();
  }

}
