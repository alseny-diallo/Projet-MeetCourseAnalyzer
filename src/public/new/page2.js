let matiere;
let classe;

function getCookie(cname) {
  	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	    let c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	}
	return null;
}

matiere = getCookie("matiere");
classe = getCookie("classe");

liste();

console.log('_______****________ ');
console.log("Classe : "+classe);
console.log("Matiere : "+matiere);

function liste(){ //le code pour la liste des participants
  	let tableList = "";
  	tableList += `
  		<select class="form-select" size="20" aria-label="size 3 select example" style="width: 100%; margin-left:auto; margin-right:auto;">
  			<option value="1">Khadim fall</option>
			<option value="2">idy sow</option>
			<option value="3">Three</option>
			<option value="4">four</option>
		</select> `;

  	document.getElementById('list').innerHTML = tableList;

}

function refresh(){
//le code pour rafraichir

}

function fin(){
//le code pour apres avoir fini

}

