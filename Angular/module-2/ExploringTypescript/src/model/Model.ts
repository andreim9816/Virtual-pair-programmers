export enum SubjectArea {
  ART = 'Arts and Crafts',
  HISTORY = 'History',
  SCIENCE = 'Science and Maths',
  LITERATURE = 'Classic Literature'
}

export class Book {
  //attributes, by default, are public
  title: string;
  author: string;
  price: number;
  readonly id: number = 1;

  constructor(author: string, title?: string, price?: number) {
    this.author = author;
    if (title) {
      this.title = title;
    }

    if (price) {
      this.price = price;
    }
  }

  toString() {
    return ` title ${this.title}, author ${this.author}`;
  }

  priceWithTax(taxRate: number): number {
    return this.price * (1 + taxRate);
  }
}

export class Video {
  title: string;
  author: string;
  price: number;
}

