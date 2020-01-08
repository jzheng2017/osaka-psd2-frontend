import {TestBed} from '@angular/core/testing';

import {RegistrationService} from './registration.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RegistrationService', () => {
    let httpMock: HttpClientTestingModule;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ]
    }));

    beforeEach(() => {
        httpMock = TestBed.get(HttpClientTestingModule);
    });

    it('should be created', () => {
        const service: RegistrationService = TestBed.get(RegistrationService);
        expect(service).toBeTruthy();
    });
});
