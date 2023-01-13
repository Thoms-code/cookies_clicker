let score = 0;
let cpt = 0;
let auto = 0;
let btn;
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

 
document.getElementById("button-x2").disabled = true;
document.getElementById("button-x5").disabled = true;
document.getElementById("button-x10").disabled = true;
document.getElementById("button-autoclicker").disabled = false;

document.getElementById("button-cookie").addEventListener("click",()=>{
  cpt = cpt + 1;
  
  document.getElementById("autoclicker").value=cpt;
  if(cpt>=20){document.getElementById("button-x2").disabled = false; 
                score = 20;
                cpt = cpt - 20;}
  
});

/////////////////////////////////////////////

document.getElementById("button-x2").addEventListener("click",()=>{ 
    cpt = cpt + 2;
    document.getElementById("autoclicker").value=cpt;
    if(cpt >= 100){document.getElementById("autoclicker").disabled == false;              
     }
    if(cpt>=100){document.getElementById("button-x5").disabled = false; 
                 cpt = cpt - 20;}
});

////////////////////////////////////////////////

document.getElementById("button-x5").addEventListener("click",()=>{
 cpt = cpt + 5;
 
 
 //score += valx5
 document.getElementById("autoclicker").value=cpt;
  //document.getElementById("score").value=score;
  if(cpt>=200){document.getElementById("button-x10").disabled = false; 
   cpt = cpt - 50;}
});


////////////////////////////////////////////////

document.getElementById("button-x10").addEventListener("click",()=>{
 
  cpt = cpt + 10;
 
  //score += valx10;
  document.getElementById("autoclicker").value=cpt;
  //document.getElementById("score").value=score;
  /*if(score>=100000){document.getElementById("button-autoclicker").disabled = true; }*/
   });
//////////////////////////////////////////////////

document.getElementById("button-autoclicker").addEventListener("click",()=>{

  setInterval(function(){;
           cpt = cpt +1 ;
          document.getElementById("autoclicker").value = cpt;
         
        },1000);

});
//////////////////////////////////////////////////////
btn = document.getElementById("button-bonus");
btn.addEventListener("click",bonus());
document.getElementById("autoclicker").value=cpt;

function bonus(){
  let time =30;
  setInterval(()=>{
     time = time -1;
     if(time>=0){
      cpt = cpt * 3;
     }
  },1000)
   /*if(time>=0){
    cpt = cpt * 3;
   }*/
}




import "../scss/styles.scss";