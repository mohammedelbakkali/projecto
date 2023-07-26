import { TestBed } from '@angular/core/testing';

import { ObjectifResultService } from './objectif-result.service';

describe('ObjectifResultService', () => {
  let service: ObjectifResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectifResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
