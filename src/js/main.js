let score = 0;
let cpt = 0;
let valx2 = 1;
let valx5 = 1;
let valx10 = 1;
let auto = 0;
let btn;


document.getElementById("button-cookie").addEventListener("click",()=>{
  cpt = cpt + 1;
  score = cpt;
  document.getElementById("cookie").value=cpt;
  document.getElementById("score").value=score;
  if(score>=20){document.getElementById("button-cookie").disabled = true; score = score - 20;}
  
});

/////////////////////////////////////////////

document.getElementById("button-x2").addEventListener("click",()=>{
  if( score >= 20){ 
     
    valx2 = valx2 * 2;}
   score += valx2;
  document.getElementById("x2").value=valx2;
  document.getElementById("score").value=score;
  if(score>=1000){document.getElementById("button-x2").disabled = true; score = score - 500;}
});

////////////////////////////////////////////////

document.getElementById("button-x5").addEventListener("click",()=>{
 if( score >= 200){
 valx5 = valx5 * 5;
 }
 score += valx5
 document.getElementById("x5").value=valx5;
  document.getElementById("score").value=score;
  if(score>=10000){document.getElementById("button-x5").disabled = true; score = score - 5000;}
});


////////////////////////////////////////////////

document.getElementById("button-x10").addEventListener("click",()=>{
 if( score >= 500){
 valx10 = valx10 * 10;
 }
  score += valx10;
  document.getElementById("x10").value=valx10;
  document.getElementById("score").value=score;
  if(score>=100000){document.getElementById("button-x5").disabled = true; }
   });
//////////////////////////////////////////////////

document.getElementById("button-autoclicker").addEventListener("click",()=>{

  setInterval(function(){auto = auto +1;
          document.getElementById("autoclicker").value = auto;
          score = source + auto;
        document.getElementById("score").value=score;
        },1000);

        //score += auto;
        //document.getElementById("score").value=score;
});
//////////////////////////////////////////////////////
btn = document.getElementById("button-bonus");
btn.addEventListener("click",bonus());
document.getElementById("score").value=score;

function bonus(){
    setInterval((score = score*3), 1000);
}




import "../scss/styles.scss";