import { TestBed } from '@angular/core/testing';

import { ComponentService } from './components.service';

describe('ComponentsService', () => {
  let service: ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
