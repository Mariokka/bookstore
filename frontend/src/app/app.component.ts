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

  @Input()
  query = "harry+potter";

  constructor(private modalService: NgbModal, private booksService: BooksService) {
    this.booksService.getBooksByQuery(this.query).subscribe((value) => {
      this.books = value.books;
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  public toValidQuery(query: string) {
    return query.replace(/\s+/g, '+').toLowerCase()
  }
}
