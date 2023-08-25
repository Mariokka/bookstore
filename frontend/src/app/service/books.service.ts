import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Books} from "../model/Books";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) {
  }

  getBooksByQuery(query: string) {
    return this.http.get<BooksDto>(
      `https://openlibrary.org/search.json?q=${query}`).pipe(map(this.toBooks));
  }

  private toBooks(booksDto: BooksDto): Books {
    return new Books(booksDto.docs);
  }
}

export interface BooksDto {
  start: string;
  num_found: string;
  docs: Doc[];
}

export interface Doc {
  cover_i: string;
  has_fulltext: string;
  edition_count: string;
  title: string;
  author_name: string[];
  first_publish_year: string;
  key: string;
  ia: string[];
  author_key: string[];
  public_scan_b: string;
}
