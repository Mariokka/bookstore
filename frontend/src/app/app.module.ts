import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {BookComponent} from './book/book.component';
import {FormsModule} from "@angular/forms";
import { CartComponent } from './cart/cart.component';
import {RouterModule} from "@angular/router";
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FiltersComponent } from './filters/filters.component';
import { DualSliderComponent } from './dual-slider/dual-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    CartComponent,
    BooksComponent,
    BookDetailsComponent,
    FiltersComponent,
    DualSliderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
        { path: '', component: BooksComponent },
        { path: 'cart', component: CartComponent },
        { path: 'books/:bookId', component: BookDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
