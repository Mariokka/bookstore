import {Component, Input} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BooksService} from "./service/books.service";
import {Book} from "./model/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] | undefined;

  query = "harry+potter";

  constructor(private modalService: NgbModal, private booksService: BooksService) {
    this.getBooks();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
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
    });
  }
}
