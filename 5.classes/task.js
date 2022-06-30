class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount; 
        this.state = state;
        this.type = type;
    }
    
    fix(){
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state <= 0) {
            this._state = 0;
        } else if (state >= 100) {
            this._state = 100
        } else {
            this._state = state
        }
    }

    get state () {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state,) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author,name, releaseDate, pagesCount, state);
        this.type = 'novel';
        
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author,name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
        
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author,name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}

class Library {
    constructor(name, books = []) {
    this.name = name;
    this.books = books;
    }

    addBook(book) {
        if (book.state >=30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i += 1) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
        }
        return null;
    }

    giveBookByName(bookName) {
        let nameIsBook;
        for (let i = 0; i < this.books.length; i += 1) {
            if (this.books[i].name === bookName) {
                nameIsBook = this.books[i];
                this.books.splice(i, 1);
                return nameIsBook;
            } 
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.itemName = {};
    }

    addMark(mark, nameObject, arrayNameObject) {
        arrayNameObject = Object.keys(this.itemName);
        if (Object.keys(this.itemName).indexOf(nameObject) === -1) {
            this.itemName[nameObject] = []
        }
        arrayNameObject = Object.keys(this.itemName);
        for (let i = 0; i < arrayNameObject.length; i += 1) {
            if (arrayNameObject[i] === nameObject) {
                if (mark > 0 && mark < 6) {
                    this.itemName[nameObject].push(mark)
                } else {
                    return console.log("Ошибка, оценка должна быть числом от 1 до 5")
                }
            }
        }
    }

    getAverageBySubject(nameObject) {
        if (Object.keys(this.itemName).indexOf(nameObject) != -1) {
            let sum = this.itemName[nameObject].reduce((acc, item) => item + acc, 0);
            return console.log(`Средний балл по предмету ${nameObject} ${Math.round((sum/this.itemName[nameObject].length) * 10) / 10}`);
        } else {
            return console.log(`Несуществующий предмет`)
        }
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < Object.keys(this.itemName).length; i += 1){
            sum += (this.itemName[Object.keys(this.itemName)[i]].reduce((acc, item) => item + acc, 0)) / Object.keys(this.itemName).length
        }
        return console.log(`Средний балл по по всем предметам ${Math.round((sum / Object.keys(this.itemName).length) * 100) / 100}`)
    }

    exclude(reason) {
        delete this.itemName;
        delete this.marks;
        this.exclude = reason
        console.log(this.exclude)
    }
}
  

    

  

  
  