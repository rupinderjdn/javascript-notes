// const s = 'Hello'
// console.log(typeof s)
// console.log(s.toUpperCase())//-> this is a primitive datatype but when we apply any method to it JAvascript in he back will use a wrapper class on it.
// const s2= new String('hello')
// console.log(typeof s2)//-> Object

//Object Literal
// const book1 = {
//     title : 'Book One',
//     author : 'John Doe',
//     year : '2013',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }
// console.log(book1.getSummary())

// const book2 = {
//     title : 'Book Two',
//     author : 'Jane Doe',
//     year : '2016',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }
// console.log(book2.getSummary())
// console.log(Object.values(book2))

// This is pain to create two separate dictionaries for same type of object

function Book(author, title, year) {
    console.log('Book Instantiated..')
    this.title = title;
    this.author =author;
    this.year= year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}
Book.prototype.getYear = function(){
    return this.year;
}
const book1 = new Book('John Doe','book on1',1987);
const book2 = new Book('Jane Doe','book two',1990);
console.log(book1.getSummary())