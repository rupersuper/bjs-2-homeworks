class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    // switch (true) {
    //   case state < 0:
    //     this._state = 0;
    //     break;
    //   case state > 100:
    //     this._state = 100;
    //     break;
    //   default:
    //     this._state = state;
    // }
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library extends PrintEditionItem {
  constructor(name) {
    super();
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const result = this.books.find((book) => book.name === bookName);

    if (result) {
      this.books = this.books.filter((book) => book.name !== bookName);
      return result;
    } else {
      return null;
    }
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }
    return (
      this.marks[subject].reduce(
        (accumulator, currentNumber) => accumulator + currentNumber,
        0
      ) / this.marks[subject].length
    );
  }

  getAverage() {
    const arr = Object.keys(this.marks);
    if (arr.length === 0) {
      return 0;
    }
    return (
      arr.reduce(
        (accumulator, subject) =>
          accumulator + this.getAverageBySubject(subject),
        0
      ) / arr.length
    );
  }
}