import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RekeningSettingsComponent } from './rekening-settings.component';

describe('RekeningSettingsComponent', () => {
  let component: RekeningSettingsComponent;
  let fixture: ComponentFixture<RekeningSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RekeningSettingsComponent ]
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
