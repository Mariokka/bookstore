export class Book {
  constructor(public title: string, public authors: string[], public publishYear: string, public cover_id: string) {
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
}
