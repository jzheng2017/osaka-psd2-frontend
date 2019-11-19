import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InloggenComponent } from './inloggen.component';

describe('InloggenComponent', () => {
  let component: InloggenComponent;
  let fixture: ComponentFixture<InloggenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InloggenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InloggenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
