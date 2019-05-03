import { TestBed } from '@angular/core/testing';

import { LoadComponentsService } from './load-components.service';

describe('LoadComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadComponentsService = TestBed.get(LoadComponentsService);
    expect(service).toBeTruthy();
  });
});
