import { Component } from '@angular/core';
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  books = this.cartService.getBooks();
  constructor(private cartService: CartService) { }

  getRandomPrice() {
    return Math.ceil(Math.random() * 20);
  }
}
