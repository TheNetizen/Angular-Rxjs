import { TestBed } from '@angular/core/testing';

import { EasyFunctionService } from './easy-function.service';

describe('EasyFunctionService', () => {
  let service: EasyFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
