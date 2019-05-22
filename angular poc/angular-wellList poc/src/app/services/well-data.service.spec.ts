import { TestBed, inject } from '@angular/core/testing';

import { WellDataService } from './well-data.service';

describe('WellDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WellDataService]
    });
  });

  it('should be created', inject([WellDataService], (service: WellDataService) => {
    expect(service).toBeTruthy();
  }));
});
