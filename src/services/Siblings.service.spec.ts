/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SiblingsService } from './Siblings.service';

describe('Service: Siblings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingsService]
    });
  });

  it('should ...', inject([SiblingsService], (service: SiblingsService) => {
    expect(service).toBeTruthy();
  }));
});
