
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var body=document.querySelector('.body');
var h3=document.querySelector('.heading3');

function changeBodyColor(){
body.style.background="linear-gradient(to right,"+ color1.value +", "+ color2.value +")";

  h3.textContent=body.style.background +";";
 
  //css.textContent=body.style.background +";";
}


color1.addEventListener('input',changeBodyColor);
color2.addEventListener('input',changeBodyColor);