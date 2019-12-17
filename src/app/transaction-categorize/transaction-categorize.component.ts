import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {RekeningcategoryService} from '../service/banks/rekeningcategory.service';
import {ActivatedRoute} from '@angular/router';
import {CategorizeRequest} from './dto/categorize-request';
import {TransactionService} from '../service/banks/transaction.service';
import {TransactionCategory} from './dto/transaction-category';
import {TransactionCategoryColor} from './dto/transaction_category_color';

@Component({
  selector: 'app-transaction-categorize',
  templateUrl: './transaction-categorize.component.html',
  styleUrls: ['./transaction-categorize.component.css']
})

export class TransactionCategorizeComponent implements OnInit {
  private iban;
  private name;
  private request = new CategorizeRequest(0, '', '', 'new', '');
  private categories: TransactionCategory[];
  private colors: TransactionCategoryColor[] = [
    {name: 'Rood', hex: '#ff0000'},
    {name: 'Oranje', hex: '#ffa500'},
    {name: 'Geel', hex: '#ffff00'},
    {name: 'Blauw', hex: '#2271b3'},
    {name: 'Zwart', hex: '#000000'},
    {name: 'Grijs', hex: '#d3d3d3'},
  ];

  constructor(private location: Location, private categoryService: RekeningcategoryService, private activatedRoute: ActivatedRoute, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.fetchCategories();
    this.activatedRoute.queryParams.subscribe(params => {
      this.iban = params.iban;
      this.name = params.name;

      this.request.content = this.name;
    });
  }

  back() {
    this.location.back();
  }

  onSubmit() {
    if (this.request.isNew()) {
      this.categorizeWithNewCategory(this.request);
    } else {
      this.categorize(this.request);
    }
  }

  canSubmit() {
    return !(this.request.content === '' || (!this.request.isNew() && this.request.id === 0) || (this.request.isNew() && (this.request.name === '' || this.request.color === '')));
  }

  categorize(request: CategorizeRequest) {
    this.transactionService.categorizeTransaction(request)
      .subscribe(response => {
        alert('De aangegeven transactie is succesvol gemarkeerd!')
        this.back();
      }, err => {
        console.log(err);
      });
  }

  categorizeWithNewCategory(request: CategorizeRequest) {
    this.transactionService.createCategory(request)
      .subscribe(response => {
        request.id = response.id;
        this.categorize(request);
      }, err => {
        console.log(err);
      });
  }

  private fetchCategories() {
    return this.transactionService.getCategories()
      .subscribe(response => {
        this.categories = response;
      }, err => {
        console.log(err);
      });
  }
}
