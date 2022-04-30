document.getElementById('button').addEventListener('click', loadData);
var para = document.getElementById('output');
function loadData() {
    //Create XHR Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open("GET", 'data.txt', true)// we want this to be asynchronous

    xhr.onprogress = function () {
        console.log('READYSTATE ', xhr.readyState);
    }// refer to readystate =3 

    xhr.onerror=function(){
        console.log('ERROR!');
    }
    xhr.onload = function () {
        console.log('READYSTATE ', xhr.readyState);
        if (this.status === 200) {
            console.log(this.responseText); // this===xhr
            para.innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    xhr.onreadystatechange = function(){
        console.log('READYSTATE ',xhr.readyState);
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
        }
    }
    xhr.send();

    //Ready State values
    // 0 : Request is not Initialised
    // 1 : server connection established
    // 2 : request recieved
    // 3 : processing request
    // 4 : request finished and response is ready -> the step where the onload() loads we are already at the step 4


    // HTTP Statuses
    // 200 : "OK"
    // 403 : "Forbidden"
    // 404 : "Not Found"
}
