//EVENTS


var button = document.getElementById('button')
// button.addEventListener('click',runEvent)

function buttonclick(){
    // console.log("Clicked")
    document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
} 
function buttonclick2(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>'

    console.log(e.type)
}

function buttonclick3(e){
    // console.log(e.clientX+" "+e.clientY);
    // console.log(e.offsetX+" "+e.offsetY);

    console.log(e.altKey);
    console.log(e.shiftKey);
}
var box = document.getElementById('box');
box.addEventListener('mousemove',runEvent)
// button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent);

function runEvent(e){
    console.log("Event Type : "+ e.type);
    output.textContent = `X : ${e.offsetX} Y : ${e.offsetY}` 
    box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
}


// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent); // -> if there is any element inside the div then it will be counted as mouse over but mouse enter will not count their
// box.addEventListener('mouseout',runEvent);


//INPUT
var itemInput = document.querySelector('input[type="text"]')
var form =document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent2)
// itemInput.addEventListener('keyup',runEvent2)//-> when you leave the key
// itemInput.addEventListener('keypress',runEvent2)
itemInput.addEventListener('focus',runEvent2)
itemInput.addEventListener('blur',runEvent2)

itemInput.addEventListener('cut',runEvent2)
itemInput.addEventListener('paste',runEvent2)
itemInput.addEventListener('input',runEvent2)
function runEvent2(e){
    e.preventDefault();
    console.log("Event Type : "+ e.type);
    // console.log(e.target.value)
    output.innerHTML = `<h3>${e.target.value}</h3>`
}


var select = document.querySelector('select')
select.addEventListener('input',runEvent2)
select.addEventListener('submit',runEvent2)

