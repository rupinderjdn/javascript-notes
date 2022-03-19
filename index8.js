function ChangeText() {
    var divisions = document.getElementsByClassName('divisions')
    console.log(divisions)

    divisions[0].innerHTML="Say"
    divisions[1].innerHTML = "Bye"
    divisions[4].style.color='red'
}