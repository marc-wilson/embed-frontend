import { TestBed, inject } from '@angular/core/testing';

import { MongoConfigurationService } from './mongo-configuration.service';

describe('MongoConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoConfigurationService]
    });
  });

  it('should be created', inject([MongoConfigurationService], (service: MongoConfigurationService) => {
    expect(service).toBeTruthy();
  }));
});
