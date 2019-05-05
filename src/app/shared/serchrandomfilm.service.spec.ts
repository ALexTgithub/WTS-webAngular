import { TestBed } from '@angular/core/testing';

import { SerchrandomfilmService } from './serchrandomfilm.service';

describe('SerchrandomfilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerchrandomfilmService = TestBed.get(SerchrandomfilmService);
    expect(service).toBeTruthy();
  });
});
