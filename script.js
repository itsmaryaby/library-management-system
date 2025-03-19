
async function fetchBooks() {
    let response = await fetch("http://localhost:5000/books");
    let books = await response.json();
    document.getElementById("books").innerHTML = books.map(book => `
        <div>
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Status: ${book.status}</p>
            <button onclick="borrowBook('${book._id}')">Borrow</button>
            <button onclick="returnBook('${book._id}')">Return</button>
        </div>
    `).join('');
}

async function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    await fetch("http://localhost:5000/addBook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author, year })
    });
    fetchBooks();
}

async function updateStatus(id, status) {
    await fetch(`http://localhost:5000/updateStatus/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
    });
    fetchBooks();
}

async function borrowBook(id) { updateStatus(id, "Borrowed"); }
async function returnBook(id) { updateStatus(id, "Available"); }

fetchBooks();
