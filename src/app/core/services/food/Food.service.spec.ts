import { TestBed } from '@angular/core/testing';

import { FoodApiService } from './Food.service';

describe('MockapiService', () => {
  let service: FoodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
