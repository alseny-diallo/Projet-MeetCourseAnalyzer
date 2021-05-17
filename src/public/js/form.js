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


document.getElementById('classe').addEventListener('click',matiere);
if(document.getElementById('classe').addEventListener('click',matiere)){
	console.log('Entrer');
	
}

function matiere(){
	console.log('ok')
	selectElmt = document.getElementById("classe");
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


function infos(){
	document.getElementById('infos').classList.remove('hidden');
}

function showMatiereList(){
  let tableList = ``;
  tableList += `<select required="" id="matiere">
  					<option>Choisisser les infos de la matiere</option>`;
  for(let i = 0; i < matiereList[classe].length; i++){
	tableList += `<option value="${matiereList[classe][i]}">${matiereList[classe][i]}</option>`;
  }
  tableList += '</select>';
  document.getElementById("matiereList").innerHTML = tableList;
  document.getElementById('matiere').addEventListener('click',infos);
}
		
