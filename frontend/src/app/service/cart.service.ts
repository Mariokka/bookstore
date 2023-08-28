import {Injectable} from '@angular/core';
import {Book} from "../model/Book";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  books: Book[] = [];

  constructor() {
  }

  addToCart(book: Book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  clearCart() {
    this.books = [];
  }
}
