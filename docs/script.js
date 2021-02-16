function setBackgroundColor() {
    var red = Math.floor(Math.random() * 128) + 128;
    var green = Math.floor(Math.random() * 128) + 128;
    var blue = Math.floor(Math.random() * 128) + 128;
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = color;
}

setBackgroundColor();
