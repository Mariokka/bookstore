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

  picture() {
    if (this.book?.cover_id)
      return `https://covers.openlibrary.org/b/id/${this.book?.cover_id}-M.jpg`;
    else
      return `../../assets/placeholder_pictures/Placeholder${this.getPictureIndex()}.jpg`;
  }

  private getPictureIndex() {
    return Math.floor(Math.random() * 5);
  }

  public addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
