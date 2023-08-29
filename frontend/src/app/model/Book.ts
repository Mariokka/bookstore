export class Book {
  public static counter = 0;
  public price: number | undefined;
  public pictureUrl: string | undefined;
  public id: number | undefined;
  constructor(public title: string, public authors: string[], public publishYear: string, public cover_id: string) {
    this.price = this.getRandomPrice();
    this.pictureUrl = this.picture();
    this.id = Book.counter++;
  }

  picture() {
    if (this.cover_id)
      return `https://covers.openlibrary.org/b/id/${this.cover_id}-M.jpg`;
    else
      return `../../assets/placeholder_pictures/Placeholder${this.getPictureIndex()}.jpg`;
  }

  private getPictureIndex() {
    return Math.floor(Math.random() * 5);
  }

  private getRandomPrice() {
    return Math.ceil(Math.random() * 20);
  }
}
