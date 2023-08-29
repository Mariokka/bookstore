import { TestBed } from '@angular/core/testing';

import { FetchedBooksService } from './fetched-books.service';

describe('FetchedBooksService', () => {
  let service: FetchedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
