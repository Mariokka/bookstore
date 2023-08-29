import { Component } from '@angular/core';
import {CartService} from "../service/cart.service";
import {Book} from "../model/Book";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  booksWithQuantity = new Map<Book, number>();
  constructor(private cartService: CartService) {
    this.booksWithQuantity = this.cartService.getBooks();
  }

  deleteFromCart(book: Book) {
    this.booksWithQuantity.delete(book);
  }
}
