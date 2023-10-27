
class Product {
    constructor(title, type, pages, genre, price) {
      this.title = title;
      this.type = type;
      this.pages = pages;
      this.genre = genre;
      this._price = price;
    }
  
    getPrice() {
      return this._price;
    }
  
    setPrice(valor) {
      if (typeof valor === 'number') {
        this._price = valor;
      }
    }
  }
  
  class Book extends Product {
    constructor(title, pages, genre) {
      super(title, "book", pages, genre, 20);
    }
  
    finalPrice() {
      const newBookPrice = this.getPrice() * 1.01;
      this.setPrice(newBookPrice);
    }
  }
  
  class Movie extends Product {
    constructor(title, genre) {
      super(title, "movie", "no pages", genre, 12);
    }
  
    finalPrice() {
      const newMovieTax = this.getPrice() * 1.2;
      this.setPrice(newMovieTax);
    }
  }
  
  class Comic extends Product {
    constructor(title, pages, genre) {
      super(title, "comic", pages, genre, 8);
    }
  
    finalPrice() {
      const newComicTax = this.getPrice() * 1.15;
      this.setPrice(newComicTax);
    }
  }
  
  const book1 = new Book("Harry Potter", 800, "Fantasy");
  book1.finalPrice();
  const movie1 = new Movie("Terminator", "Action");
  movie1.finalPrice();
  const comic1 = new Comic("Spider-Man", 20, "Superheroes");
  comic1.finalPrice();
  
  console.log(book1.getPrice());
  console.log(movie1);
  console.log(comic1.getPrice());


