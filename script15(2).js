// Traversing the DOM
var itemList = document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
// similar parentElement
console.log(itemList.parentNode.parentNode)

// Child NOdes
console.log(itemList.childNodes)

console.log(itemList.children) // preffered

itemList.children[2].style.backgroundColor = 'yellow'

//firstchild
itemList.firstChild // returns "text"

//fistElement child
itemList.firstElementChild // return element

console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)

console.log(itemList.previousElementSibling)

// Create element
var newDiv = document.createElement('div')

newDiv.className = 'hello'
newDiv.id = 'helo-1'
newDiv.setAttribute('title','hello div')

var newdivtext = document.createTextNode("hello world");

newDiv.appendChild(newdivtext)

// Inserting in the DOM

var container = document.querySelector('.container')
var h1 = document.querySelector('header h1')

container.insertBefore(newdivtext, h1)
console.log(newDiv)