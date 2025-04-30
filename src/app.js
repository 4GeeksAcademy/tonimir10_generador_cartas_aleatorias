import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const figuraList = ['♦', '♥', '♠', '♣'];
const numeroList = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
const _getRandom = (array) => {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
window.onload = function() {
  //write your code here
  const figuraText = _getRandom(figuraList);
  const numeroText = _getRandom(numeroList)
  const figuraTop = document.querySelector(".figura-top");
  figuraTop.textContent = figuraText;
  const figuraBottom = document.querySelector(".figura-bottom");
  figuraBottom.textContent = figuraText;
  const numero = document.querySelector(".number");
  numero.textContent = numeroText;
  

};
