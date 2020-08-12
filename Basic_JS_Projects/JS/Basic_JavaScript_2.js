function My_First_Function() {
    var str = "The color of this is Purple";
    var result = str.fontcolor("purple");
    document.getElementById("PurpleTxt").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book.";
    document.getElementById("concatenate").innerHTML = sentence;
}