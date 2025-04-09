let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, status: "Available" },
    { id: 2, title: "1984", author: "George Orwell", year: 1949, status: "Available" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, status: "Available" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, status: "Available" },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, status: "Available" }
];

function displayBooks() {
    const booksDiv = document.getElementById("books");
    booksDiv.innerHTML = "";

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Status:</strong> ${book.status}</p>
        `;
        booksDiv.appendChild(bookCard);
    });
}

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = parseInt(document.getElementById("year").value);

    if (title && author && year) {
        const newBook = {
            id: Date.now(),
            title,
            author,
            year,
            status: "Available"
        };
        books.push(newBook);
        displayBooks();

        // Clear inputs
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
    }
}

// Show books when page loads
window.onload = displayBooks;

