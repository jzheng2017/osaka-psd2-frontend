import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { RekeningoverzichtComponent } from './rekeningoverzicht.component';

describe('RekeningoverzichtComponent', () => {
  let component: RekeningoverzichtComponent;
  let fixture: ComponentFixture<RekeningoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningoverzichtComponent ],
      imports: [
        FormsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
