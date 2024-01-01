import { TestBed } from '@angular/core/testing';

import { IAFormService } from './iaform.service';

describe('IAFormService', () => {
  let service: IAFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
