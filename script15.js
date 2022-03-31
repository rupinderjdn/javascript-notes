// Examin the document object

// console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title =123
console.log(document.doctype)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
document.all[12].textContent = "hello"

console.log(document.forms) // -> Not an array but an HTML Collection
console.log(document.images)

// GET ELEMENT BY ID//
console.log(document.getElementById('header-title'))
var header_title = document.getElementById('header-title')

header_title.textContent = 'Hello';
// textcontent is better
header_title.innerHTML = 'Goodbye';

header_title.style.color = 'blue';

header_title.style.borderBottom = 'solid 3px black'

// GET ELEMENTS BY CLASS NAME
var items = document.getElementsByClassName('list-group-item'); // -> HTML COLLECTION

items[1].textContent = 'Hello 1'
items[1].style.fontWeight = '1000'
items[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){
    items[i].textContent = `hello ${i}`
}

var item = document.querySelector('.list-group-item')// -> selects first by default

item.style.backgroundColor = 'red';

var itemLast = document.querySelector('.list-group-item:last-child')// -> selects last
itemLast.style.backgroundColor = 'green'
var button = document.querySelector("input[type='submit']");
button.value = 'SEND'