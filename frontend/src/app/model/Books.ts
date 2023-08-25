import {Doc} from "../service/books.service";
import {Book} from "./Book";

export class Books {
  books: Book[] = [];
  constructor(public docs: Doc[]) {
    for (let i = 0; i < docs.length; i++) {
      const book = new Book(docs[i].title, docs[i].author_name, docs[i].first_publish_year);
      this.books.push(book);
    }
  }
}
