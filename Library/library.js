const tableBody = document.getElementById("library-table-body");
const titleHTML = document.getElementById("add_book_title");
const authorHTML = document.getElementById("add_book_author");
const pagesHTML = document.getElementById("add_book_pages");
const readHTML = document.getElementById("add_book_read");
const form = document.getElementById("form");

const notReadClassName = "notRead";
const readClassName = "read";

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    Info() {
        this.result = `${titleHTML} by ${authorHTML}, ${pagesHTML} pages, `;
        if (readHTML) this.result += "has been read";
        else this.result += "not yet read";
        return this.result;
    }
}

let myLibrary = [
    new Book("The Hobbit", "J. R. R. Tolkien", 310, true),
    new Book("The Fellowship of the Ring", "J. R. R. Tolkien", 423, false),
    new Book("The Two Towers", "J. R. R. Tolkien", 352, true),
    new Book("The Return of the King", "J. R. R. Tolkien", 416, false)
];

/*
   ADD BOOK FUNCTIONS
*/

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addNewBook() {
    if (
        titleHTML.value.length === 0 ||
        authorHTML.value.length === 0 ||
        pagesHTML.value.length === 0 ||
        readHTML.value.length === 0
    ) {
        alert("Please add all book information.");
        return;
    }
    let readStatus;
    if (readHTML.value === "Read") {
        readStatus = true;
    }

    const book = new Book(
        titleHTML.value,
        authorHTML.value,
        pagesHTML.value,
        readStatus
    );
    addBookToLibrary(book);
}

function clearInputs() {
    titleHTML.value = "";
    authorHTML.value = "";
    pagesHTML.value = "";
    readHTML.checked = false;
}

/*
    DELETE BOOK FUNCTIONS
*/

function deleteBook(book) {
    console.log(`deleting book: ${book.title}`);
    const deleteIndex = myLibrary.indexOf(book);

    /*
    // if deleting first book, just shift
    if (deleteIndex === 0) {
        myLibrary.shift();
        return;
    }
    // if deleting last book, just pop
    if (deleteIndex === myLibrary.length-1) {
        myLibrary.pop();
        return;
    }
    //otherwise, if removing from the middle somewhere,
    // split arrays and rejoin, excluding the book to be deleted
    let startArr = myLibrary.slice(0, deleteIndex);
    let endArr = myLibrary.slice(deleteIndex+1);
    myLibrary = Array.prototype.concat(startArr, endArr);
    */

    // cleaner looking with a switch statement
    switch (deleteIndex) {
        case 0:
            myLibrary.shift();
            break;
        case myLibrary.length - 1:
            myLibrary.pop();
            break;
        default:
            myLibrary = Array.prototype.concat(
                myLibrary.slice(0, deleteIndex),
                myLibrary.slice(deleteIndex + 1)
            );
    }
}

// add click even listeners for delete buttons
function hookDeleteButtons() {
    myLibrary.forEach((book) => {
        const deleteButton = document.getElementById(`${book.title}_delete`);
        deleteButton.addEventListener("click", () => {
            // remove book from lib and refresh library display
            deleteBook(book);
            displayBooks();
        });
    });
}

/*
    TOGGLE READ FUNCTION
*/
function hookReadButtons() {
    myLibrary.forEach((book) => {
        const readButton = document.getElementById(`${book.title}_toggle_read`);
        readButton.addEventListener("click", (e) => {
            e.preventDefault(); // not needed?
            if (book.read) {
                book.read = false;
                readButton.innerHTML = "Not Read";
                readButton.classList.remove(readClassName);
                readButton.classList.add(notReadClassName);
            } else {
                book.read = true;
                readButton.innerHTML = "Read";
                readButton.classList.remove(notReadClassName);
                readButton.classList.add(readClassName);
            }
        });
    });
}

// adds table row data to the html table
// then hook delete buttons to delete function
function addToLibraryTable(tableData) {
    tableBody.innerHTML = tableData;
    hookDeleteButtons();
    hookReadButtons();
}
// forms table rows from current library
// to add to the html table
function displayBooks() {
    let tableData = "";
    myLibrary.forEach((book) => {
        tableData += `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>`;

        let readStatus = "Read";
        let readClass = readClassName;
        if (!book.read) {
            readStatus = "Not Read";
            readClass = notReadClassName;
        }
        // toggle read button
        tableData += `<td><button id="${book.title}_toggle_read" class="readButton ${readClass}">${readStatus}</button></td>`;

        // delete buttons
        tableData += `<td>
            <button id="${book.title}_delete" value="${book.title}" >Delete</button>
        </td>
        </tr>`;
    });
    addToLibraryTable(tableData);
}

/// startup

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form submit refreshing page
    addNewBook();
    displayBooks();
    clearInputs();
});

displayBooks();
