class Library {
    #books = [];

    //конструктор
    constructor(listOfBooks) {
        try {
            if (listOfBooks.length === 0) {
                throw new Error('Вы не передали книги в библиотеку!');
            } else {
                listOfBooks.forEach(book => {
                    if (this.#books.includes(book)) {
                        throw new Error(`В списке книг есть дубликаты: "${book}"!`);
                    } else {
                        this.#books.push(book);
                        return this.#books;
                    }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    get allBooks() {
        return this.#books;
    }


    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Книга с названием "${title}" уже существует в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }


    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                console.log(`Обновленный список книг: ${this.#books}`);
                return this.#books;
            } else {
                throw new Error(`Книги с названием "${title}" нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    hasBook(title) {
        if (this.#books.includes(title)) {
            return true;
        } else {
            return false;
        }
    }
}
const library = new Library(["Ночь", "Три поросенка","Три медведя"]);
console.log(library.allBooks);

// console.log(library.addBook("Три поросенка"));
// console.log(library.addBook("Тень"));


// console.log(library.removeBook("Бременские музыканты"));
// console.log(library.removeBook("Тень"));
// console.log(library.removeBook("Три поросенка"));

// console.log(library.hasBook("Снежная королева"));
// console.log(library.hasBook("Три поросенка"));
// console.log(library.hasBook("Ночь"));
// console.log(library.hasBook("Три медведя"));


