import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { RekeningSettingsComponent } from './rekening-settings.component';
import {Location} from '@angular/common';

describe('RekeningSettingsComponent', () => {
  let component: RekeningSettingsComponent;
  let fixture: ComponentFixture<RekeningSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningSettingsComponent, Location],
      imports: [
        FormsModule,
      ],
      providers: [
        Location,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RekeningSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
