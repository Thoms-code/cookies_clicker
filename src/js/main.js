let score = 0;
let cpt = 0;
let valx2 = 1;
let valx5 = 1;
let valx10 = 1;
let auto = 0;
let bonus = 1;
let btn;

document.getElementById("button-cookie").addEventListener("click",()=>{
  cpt = cpt + 1;
  score = cpt;
});

/////////////////////////////////////////////

document.getElementById("button-x2").addEventListener("click",()=>{
  if( score >= 20){
  valx2 = valx2 * 2;
  }
  score += valx2;
});

////////////////////////////////////////////////

document.getElementById("button-x5").addEventListener("click",()=>{
 if( score >= 150){
 valx5 = valx5 * 5;
 }
 score += valx5
});


////////////////////////////////////////////////

document.getElementById("button-x10").addEventListener("click",()=>{
 if( score >= 500){
 valx10 = valx10 * 10;
 }
  score += valx10;
   });
//////////////////////////////////////////////////

document.getElementById("button-autoclicker").addEventListener("click",()=>{

   // document.getElementById("timer").innerHTML = i;
	 setInterval("augmenter()", 1000);
     score += auto; 

});
//////////////////////////////////////////////////////
btn = document.getElementById("button-bonus");
btn.addEventListener("click",bonus);

/////////////////////////////////////////////////////
/*<html>
<input class="input" type="text" placeholder="fill me">
<button class="button">Click Me</button>
</html>*/

let input = document.querySelector(".input");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}

import "../scss/styles.scss";

////////////////////////////////////////////////////////////
function augmenter() {
    auto = auto + 1;	
}

function bonus(){
    setTimeout((score = score*3), 0000);
}

