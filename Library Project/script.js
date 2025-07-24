function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (this.read === true) {
      return `${this.title} by ${this.author}, ${this.pages} pages, has read.`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
    }
  };
}

const lightsOut = new Book("Lights Out", "Navessa Allen", 395, true);
const toKillAMockingbird = new Book(
  "To Kill A Mockingbird",
  "JD Salinger",
  455,
  false
);

console.log(lightsOut);
console.log(lightsOut.info());
console.log(toKillAMockingbird.info());
