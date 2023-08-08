import { TestBed } from '@angular/core/testing';

import { ProblemCauseConsequenceService } from './problem-cause-consequence.service';

describe('ProblemCauseConsequenceService', () => {
  let service: ProblemCauseConsequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemCauseConsequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
