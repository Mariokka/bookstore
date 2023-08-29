import {Injectable} from '@angular/core';
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  booksWithQuantity = new Map<Book, number>();

  constructor() {
  }

  addToCart(book: Book) {
    if (this.booksWithQuantity.has(book))
      this.booksWithQuantity.set(book, this.booksWithQuantity.get(book)! + 1);
    else
      this.booksWithQuantity.set(book, 0);
  }

  getBooks() {
    return this.booksWithQuantity;
  }

  clearCart() {
    this.booksWithQuantity = new Map<Book, number>();
  }
}
