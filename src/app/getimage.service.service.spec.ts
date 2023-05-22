import { TestBed } from '@angular/core/testing';

import { GetimageServiceService } from './getimage.service.service';

describe('GetimageServiceService', () => {
  let service: GetimageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetimageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
