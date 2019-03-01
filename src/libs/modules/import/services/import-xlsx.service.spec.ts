import { TestBed } from '@angular/core/testing';

import { ImportXlsxService } from './import-xlsx.service';

describe('ImportXlsxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportXlsxService = TestBed.get(ImportXlsxService);
    expect(service).toBeTruthy();
  });
});
