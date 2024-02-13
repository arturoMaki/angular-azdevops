import { TestBed } from '@angular/core/testing';

import { DataPageService } from './data-page.service';

describe('DataPageService', () => {
  let service: DataPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
