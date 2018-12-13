import { TestBed, inject } from '@angular/core/testing';

import { SpritesService } from './sprites.service';

describe('SpritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpritesService]
    });
  });

  it('should be created', inject([SpritesService], (service: SpritesService) => {
    expect(service).toBeTruthy();
  }));
});
