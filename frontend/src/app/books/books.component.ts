import { Component } from '@angular/core';
import {Book} from "../model/Book";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BooksService} from "../service/books.service";
import {FetchedBooksService} from "../service/fetched-books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];

  filtersModelOn: boolean = false;

  query = "harry+potter";

  constructor(private booksService: BooksService, private fetchedBooksService: FetchedBooksService) {
    this.getBooks();
  }

  public setQuery(query: string) {
    this.query = this.toValidQuery(query);
    this.getBooks();
  }

  public toValidQuery(query: string) {
    return query.replace(/\s+/g, '+').toLowerCase()
  }

  public getBooks() {
    this.booksService.getBooksByQuery(this.query).subscribe((value) => {
      this.books = value.books;
      this.saveBooks();
    });
  }

  public saveBooks() {
    this.fetchedBooksService.saveBooks(this.books);
  }
}
