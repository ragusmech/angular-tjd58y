import { TestBed } from '@angular/core/testing';

import { formServices } from './app.service.service';

describe('formServices', () => {
  let service: formServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(formServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
