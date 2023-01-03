

const express = require("express");
const app = express();

const snakeboard = document.getElementById("gameCanvas");
const snakeboard_ctx = gameCanvas.getContext("2d");
const board_background = "black";
const board_border = "black";

document.addEventListner("click", clickedStart);
document.addEventListner("keydown", change_direction);
var score = 0;
//var hasClicked = false;



let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200},
];


function clickedStart() {
  //hasClicked = true;

  runGame();
}

function runGame() {

}

funtion gameOver() {
  
}
