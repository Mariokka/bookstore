import { Injectable } from '@angular/core';
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class FetchedBooksService {
  books: Book[] = [];
  constructor() { }

  public saveBooks(books: Book[]) {
    this.books = books;
  }

  public getBooks() {
    return this.books;
  }
}
