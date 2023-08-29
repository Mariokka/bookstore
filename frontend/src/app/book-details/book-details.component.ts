import {Component} from '@angular/core';
import {Book} from "../model/Book";
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../service/books.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book | undefined;
  books: Book[] = [];

  // ngOnInit() {
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productIdFromRoute = Number(routeParams.get('bookId'));
  //
  //   this.book = books.find(book => book.id === productIdFromRoute);
  // }
  // constructor(private route: ActivatedRoute, private bookService: BooksService) {
  //   this.books = bookService.
  // }
}
