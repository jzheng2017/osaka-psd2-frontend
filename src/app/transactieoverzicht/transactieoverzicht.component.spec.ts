import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactieoverzichtComponent } from './transactieoverzicht.component';

describe('TransactieoverzichtComponent', () => {
  let component: TransactieoverzichtComponent;
  let fixture: ComponentFixture<TransactieoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactieoverzichtComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactieoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
