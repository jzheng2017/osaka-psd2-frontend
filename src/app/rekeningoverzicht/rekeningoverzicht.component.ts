import {Component, OnInit} from '@angular/core';
import {Rekening} from '../rekening/dto/rekening';
import {RekeningService} from '../service/banks/rekening.service';
import {Title} from '@angular/platform-browser';
import {NgxSpinnerService} from 'ngx-spinner';
import {RekeningcategoryService} from '../service/banks/rekeningcategory.service';
import {Category} from '../rekening-settings/dto/category';

@Component({
  selector: 'app-rekeningoverzicht',
  templateUrl: './rekeningoverzicht.component.html',
  styleUrls: ['./rekeningoverzicht.component.css']
})
export class RekeningoverzichtComponent implements OnInit {
  rekeningen: Rekening[];
  totalBalance: number;
  isLoading = true;
  error = '';
  status: number;
  categories: Category[];
  name: string;
  selectedCategory = new Category(0, '');
  private title = 'Rekeningoverzicht';

  constructor(private rekeningService: RekeningService, private rekeningCategoryService: RekeningcategoryService, private titleService: Title, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    if (this.isLoading) {
      this.spinner.show();
    }
    this.getRekeningen();
    this.getCategories();
  }

  getRekeningen() {
    this.isLoading = true;

    this.rekeningService.getRekeningen().subscribe(rekeningen => {
        this.rekeningen = rekeningen.accounts;
        this.totalBalance = rekeningen.balance;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.rekeningen = [];
        this.error = err.error.errorMessage;
      }
    );
  }

  getRekeningenByCategory() {
    this.isLoading = true;

    this.rekeningService.getRekeningenByCategory(this.selectedCategory.id).subscribe(rekeningen => {
        this.rekeningen = rekeningen.accounts;
        this.totalBalance = rekeningen.balance;
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.rekeningen = [];
        this.error = err.error.errorMessage;
      }
    );
  }

  getCategories() {
    this.rekeningCategoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    if (this.selectedCategory.id > 0) {
      this.getRekeningenByCategory();
    } else {
      this.getRekeningen();
    }
  }
}


