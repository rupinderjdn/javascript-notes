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