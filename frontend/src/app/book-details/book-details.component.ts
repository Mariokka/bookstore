import {Component} from '@angular/core';
import {Book} from "../model/Book";
import {ActivatedRoute} from "@angular/router";
import {FetchedBooksService} from "../service/fetched-books.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book: Book | undefined;
  books: Book[] = [];

  constructor(private route: ActivatedRoute,
              private fetchedBookService: FetchedBooksService,
              private cartService: CartService) {
    this.books = fetchedBookService.getBooks();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('bookId'));
    this.book = this.books.find(book => book.id === productIdFromRoute);
  }

  public addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
