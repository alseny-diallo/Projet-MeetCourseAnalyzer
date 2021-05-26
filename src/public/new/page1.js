let classeList = [
	'DSTI1',
	'DSTI2',
	'DUT1',
	'DUT2',
	'Licence',
	'Master 1',
	'Master 2',
	'DUT1',
	'DUT2',
	'DUT3'
	];

let matiereList = [
	[	'Algorithme',
		'Langage C',
		'Architecture des ordinateurs',
		'Anglais',
		'Systeme d\'exploitation',
		'Economie',
		'Html',
		'Pascal',
		'SGBD',
		'Reseau'],
	[	'Administration base de donnes',
		'Developpement mobile',
		'Gestion des projets',
		'Html',
		'Insertion profesionel',
		'Java',
		'MSI',
		'Reseau',
		'Systeme d\'exploitation',
		'Veille technologique'],
	[	'Algorithme',
		'Langage C',
		'SGBD',
		'Reseau',
		'Systeme d\'exploitation',
		'UML',
		'POO']];

var selectElmt;
let classe;
let cl;
let mat;
let matier;
classes();


let d = document.getElementsByClassName('classe');
for(let i = 0; i < d.length; i++) {
    d[i].addEventListener('click',matiere);
}


function classes(){
  	let tableList = "";
  	tableList += `
		<table class="tableau">
	  		<tr>
				<td>`;  

  	for(let j = 0; j < classeList.length/2; j++){
  		tableList += `
					<div class="form-check">
				  	  	<input class="form-check-input classe" name="classe" type="radio" value="${classeList[j]}">
				  	  	<label class="form-check-label" for="gridRadios1">${classeList[j]}</label>
					</div>`;  	
  	}
  	tableList += `	
  				</td>
		 		<td>`;
	for(let j = classeList.length/2; j < classeList.length; j++){
  		tableList += `
					<div class="form-check">
				  	  	<input class="form-check-input classe" name="classe" type="radio" value="${classeList[j]}">
				  	  	<label class="form-check-label" for="gridRadios1">${classeList[j]}</label>
					</div>`;  	
  	}
  	tableList += `
	    		</td>
  	  		</tr>
		</table> `; 
  	document.getElementById('classes').innerHTML = tableList;
  	let d = document.getElementsByClassName('classe');
  	for (let i = 0; i < d.length; i++) {
    	d[i].addEventListener('click',matiere);
  	}
}


function matiere(){
	console.log('Entrer classe');
	let select = document.getElementsByName('classe');
	for(var k = 0; k < select.length; k++){
		if(select[k].checked){
			if(sessionStorage.getItem(classe) == null){
				let val = select[k].value;
				classe = val;
				sessionStorage.setItem(classe, val);
				console.log("Classe : "+sessionStorage.getItem(classe));
			}else{
				sessionStorage.removeItem(classe);
				var val = select[k].value;
				classe = val;
				sessionStorage.setItem(classe, val);
				console.log("New classe : "+sessionStorage.getItem(classe));
			}
		}
	}
	cl = sessionStorage.getItem(classe);
	if(classe == "DSTI1" || classe == "DUT1"){
		classe = 0; 
	}else if(classe == "DSTI2" || classe == "DUT2"){
		classe = 1; 
	}else if(classe == "Licence"){
		classe = 2;
	}
	showMatiereList();
}


function infos(){
	console.log('Entrer matiere');
	let select = document.getElementsByClassName('matiere');
	for(var k = 0; k < select.length; k++){
		if(select[k].checked){
			if(sessionStorage.getItem(matier) == null){
				let val = select[k].value;
				matier = val;
				sessionStorage.setItem(matier, val);
				console.log("Matiere : "+sessionStorage.getItem(matier));
			}else{
				sessionStorage.removeItem(matier);
				var val = select[k].value;
				matier = val;
				sessionStorage.setItem(matier, val);
				console.log("New matiere : "+sessionStorage.getItem(matier));
			}
		}
	}
	mat = sessionStorage.getItem(matier);
	document.getElementById('infos').classList.remove('hidden');
}

function showMatiereList(){
  	let tableList = `
	  	<div id='groupMatiere' class="col-md-8 ml-auto mr-auto card border-dark mb-3" style="position: static;">
	    	<div class="padding">
	      		<div class="container card-header mr-auto ml-auto">
	  				<div class="container text-center card-header mr-auto ml-auto"> 
	        		<h4 class="q1">Choisissez une ou plusieurs matière(s)</h4>
	        	</div>
	        	<table class="tableau">
	  				<tr>
						<td>`;

	for(let j = 0; j < matiereList[classe].length/2; j++){
  		tableList += `
							<div class="form-check">
						  	  	<input class="form-check-input matiere" name="matiere" type="radio" value="${matiereList[classe][j]}">
						  	  	<label class="form-check-label" for="gridRadios1">${matiereList[classe][j]}</label>
							</div>`;  	
  	}
  	tableList += `	
		  				</td>
				 		<td>`;

	for(let j = classeList.length/2; j < matiereList[classe].length; j++){
  		tableList += `
							<div class="form-check">
						  	  	<input class="form-check-input matiere" name="matiere" type="radio" value="${matiereList[classe][j]}">
						  	  	<label class="form-check-label" for="gridRadios1">${matiereList[classe][j]}</label>
							</div>`;  	
  	}

  	tableList += `
			    		</td>
		  	  		</tr>
				</table>
			</div>
    	</div>
  	</div> `;

  	document.getElementById("matiereList").innerHTML = tableList;
  	let d = document.getElementsByClassName('matiere');
  	for (let i = 0; i < d.length; i++) {
    	d[i].addEventListener('click',infos);
  	}
}
	


function fin(){
	console.log('_______________ ');
	console.log("Classe : "+cl);
	console.log("Matiere : "+mat);
	sessionStorage.clear();

	let dt = new Date();
	dt.setTime(dt.getTime() + (1 * 24 * 60 * 60 * 1000));
	var expires = "expires="+dt.toUTCString();

	document.cookie = "classe =" + cl + ";" + expires + ";path=/; SameSite=None; Secure";
	document.cookie = "matiere =" + mat + ";" + expires + ";path=/; SameSite=None; Secure";

	// document.location.href = 'page2.html?classe='+cl+'&matiere='+mat;
	//la variable cl contient la classe et la variable mat contient la matiere choisi
}	
