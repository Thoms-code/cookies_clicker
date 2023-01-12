
function increment(cpt){
    return cpt = cpt+1;
}
let compteur=0;
console.log(increment(compteur));
/////////////////////////////////////////////

function multi2(valP2){
    return valP2 = valP2 * 2;
}

let valeurPar2=1;
console.log(multi2(valeurPar2));
////////////////////////////////////////////////

function multi5(valP5){
    return valP5 = valP5 * 5;
}

let valeurPar5=1;
console.log(multi5(valeurPar5));
////////////////////////////////////////////////

<html>
<head>
	<script type="text/javascript">
		var i=0;
		function augmenter() {
			i++;
			document.getElementById("timer").innerHTML = i;
		}
		setInterval("augmenter()", 1000);
	</script>
</head>
<body>
 
<p id="timer">0</p>
 
</body>
</html>
//////////////////////////////////////////////////////

function bonus(){
    
}

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

