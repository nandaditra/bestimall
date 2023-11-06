import { TestBed } from '@angular/core/testing';

import { ListcategoryService } from './listcategory.service';

describe('ListcategoryService', () => {
  let service: ListcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
