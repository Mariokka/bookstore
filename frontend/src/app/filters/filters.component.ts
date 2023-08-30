import {Component, Input} from '@angular/core';
import {Book} from "../model/Book";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input()
  books: Book[] = [];

  public getPriceRange() {
    let bookWithMinimumPrice = this.books.reduce(function (p, v) {
      return ( p.price! <= v.price! ? p : v );
    });
    let bookWithMaximumPrice = this.books.reduce(function (p, v) {
      return ( p.price! >= v.price! ? p : v );
    });
    return `${bookWithMinimumPrice.price}$ - ${bookWithMaximumPrice.price}$`;
  }
}
