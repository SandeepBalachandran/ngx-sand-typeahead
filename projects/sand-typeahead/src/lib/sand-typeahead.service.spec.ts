import { TestBed } from '@angular/core/testing';

import { SandTypeaheadService } from './sand-typeahead.service';

describe('SandTypeaheadService', () => {
  let service: SandTypeaheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandTypeaheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
