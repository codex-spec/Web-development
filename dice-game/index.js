var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgE1 = "dice" + randomNumber1 + ".png";
var randImagesOne = "images/" + imgE1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randImagesOne);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgE2 = "dice" + randomNumber2 + ".png";
var randImagesTwo = "images/" + imgE2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randImagesTwo);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
}else {
    document.querySelector("h1").innerHTML = "draw!";
}