const form = document.getElementById("book-form");
const output = document.getElementById("output");
const container = document.getElementById("library-container");

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.info = function () {
    if (this.read === true) {
      return `${this.title} by ${this.author}, ${this.pages} pages, has read.`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
    }
  };
}

const myLibrary = [];

// function addBookToMyLibrary(title, author, pages, read, id) {
//   const book = new Book(title, author, pages, read, id);
//   myLibrary.push(book);
// }

// addBookToMyLibrary(
//   "Lights Out",
//   "Navessa Allen",
//   395,
//   true,
//   crypto.randomUUID()
// );
// addBookToMyLibrary(
//   "The Hobbit",
//   "J.R.R. Tolkien",
//   295,
//   true,
//   crypto.randomUUID()
// );
// addBookToMyLibrary(
//   "Orbital",
//   "Samantha Harvey",
//   300,
//   true,
//   crypto.randomUUID()
// );

// console.log(myLibrary);

// function displayBooks() {
//   const container = document.getElementById("library-container");
//   container.innerHTML = ""; // Clear previous content

//   myLibrary.forEach((book) => {
//     const bookDiv = document.createElement("div");
//     bookDiv.classList.add("book");

//     bookDiv.textContent = book.info();

//     container.appendChild(bookDiv);
//   });
// }

// console.log(displayBooks());

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents the page from refreshing

  // Get form values
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.bookRead.checked;

  // Create a new Book object
  const newBook = new Book(title, author, pages, read);

  // Add the new Book object to the array
  myLibrary.push(newBook);

  // Display the book on the page
  displayBook(newBook);

  // Reset the form
  form.reset();
});

function displayBook(book) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  function updateBookDisplay() {
    bookDiv.innerHTML = `
    <p><strong>Title:</strong> ${book.title}</p>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
  `;

    bookDiv.appendChild(toggleButton);
    bookDiv.appendChild(removeButton);
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Book";
  removeButton.addEventListener("click", () => bookDiv.remove());

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Read Status";
  toggleButton.style.marginRight = "20px";
  toggleButton.addEventListener("click", () => {
    book.read = !book.read;
    updateBookDisplay();
  });
  updateBookDisplay();
  container.appendChild(bookDiv);
}
