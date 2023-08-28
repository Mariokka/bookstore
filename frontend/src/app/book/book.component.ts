import {Component, Input} from '@angular/core';
import {Book} from "../model/Book";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input()
  book: Book | undefined;

  constructor(private cartService: CartService) {}

  public addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
