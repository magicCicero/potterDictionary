import { TestBed } from '@angular/core/testing';

import { PaginationDataService } from './pagination-data.service';

describe('PaginationDataService', () => {
  let service: PaginationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
