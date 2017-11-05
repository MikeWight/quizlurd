import { TestBed, inject } from '@angular/core/testing';

import { LanguagechosenService } from './languagechosen.service';

describe('LanguagechosenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguagechosenService]
    });
  });

  it('should be created', inject([LanguagechosenService], (service: LanguagechosenService) => {
    expect(service).toBeTruthy();
  }));
});
