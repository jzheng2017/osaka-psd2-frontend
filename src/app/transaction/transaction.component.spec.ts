import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TransactionComponent} from './transaction.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TransactionComponent', () => {
    let component: TransactionComponent;
    let fixture: ComponentFixture<TransactionComponent>;
    let httpMock: HttpClientTestingModule;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TransactionComponent,
            ],
            imports: [
                FormsModule,
                RouterTestingModule,
                HttpClientTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        httpMock = TestBed.get(HttpClientTestingModule);
        fixture = TestBed.createComponent(TransactionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
        // expect(component).toBeTruthy();
    // });
});
