//declaration variables
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

let selectElmt;
let classe;


document.getElementById('classes').addEventListener('click',matiere);
if(document.getElementById('classes').addEventListener('click',matiere)){
	console.log('Entrer');
	
}

function matiere(){
	console.log('ok');
	selectElmt = document.getElementById("classes");
	classe = selectElmt.options[selectElmt.selectedIndex].value;
	if(classe == "dsti1" || classe == "dut1"){
		classe = 0; 
		console.log(classe);
	}else if(classe == "dsti2" || classe == "dut2"){
		classe = 1; 
		console.log(classe);
	}else if(classe == "licence"){
		classe = 2;
		console.log(classe);
	}
	showMatiereList();
}


/*function infos(){
	document.getElementById('infos').classList.remove('hidden');
}*/

function showMatiereList(){
  let tableList = ``;
  tableList += `<select class="form-control" id="listMatiere" name="listMatiere">
  					<option >Matiere</option>`;
  for(let i = 0; i < matiereList[classe].length; i++){
	tableList += `<option onclick="showButton();" value="${matiereList[classe][i]}">${matiereList[classe][i]}</option>`;
  }
  tableList += '</select>';
  document.getElementById("matiereList").innerHTML = tableList;
  document.getElementById("listMatiere").addEventListener('click',infos);
}
/*fonction permettant l'affichage du bouton de validation*/
function showButton(){
	document.getElementById("bouton").style.display="block";
}


/* Fonction d'affichage de contenu*/
function displayContent(params) {
	var canavas1 = document.getElementById("note");
	var canavas2 = document.getElementById("absence");
	var canavas3 = document.getElementById("connection");
	var paragraph = document.getElementById("home");
	var form = document.getElementById("form");
	var listeMatiere = document.getElementById("liste");
	var matieres = document.getElementById("matiereList");
	var bouton = document.getElementById("bouton");
	switch (params) {
		case 1:
			canavas1.style.display  = "block";
			canavas2.style.display = "none";
			canavas3.style.display = "none";
			listeMatiere.style.display = "block";
			paragraph.style.display = "none";
			form.style.display = "block";
			break;
		case 2:
			canavas1.style.display = "none";
			canavas2.style.display = "block";
			canavas3.style.display = "none";
			listeMatiere.style.display = "block";
			paragraph.style.display = "none";
			form.style.display = "block";
			break;
		case 3:
			canavas1.style.display = "none";
			canavas2.style.display = "none";
			canavas3.style.display =" block";
			listeMatiere.style.display = "block";
			paragraph.style.display = "none";
			form.style.display = "block";
			break;    
		default:
			window.location.reload();
			canavas1.style.display = "none";
			canavas2.style.display = "none";
			canavas3.style.display = "none";
			listeMatiere.style.display = "none";
			paragraph.style.display = "block";
			liste.style.display = "none";
			matieres.style.display = "none";
			bouton.style.display = "none";
			break;
	}
}

