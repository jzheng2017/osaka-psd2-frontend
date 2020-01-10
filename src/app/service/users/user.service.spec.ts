import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({    imports: [
      RouterTestingModule,
      HttpClientModule
    ]}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
