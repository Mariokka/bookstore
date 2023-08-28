import { Component } from '@angular/core';
import {CartService} from "../service/cart.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  books = this.cartService.getBooks();
  constructor(private cartService: CartService) { }

  deleteFromCart(book: Book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }
}
