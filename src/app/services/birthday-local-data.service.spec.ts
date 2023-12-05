import { TestBed } from '@angular/core/testing';

import { BirthdayLocalDataService } from './birthday-local-data.service';

describe('BirthdayLocalDataService', () => {
  let service: BirthdayLocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthdayLocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
