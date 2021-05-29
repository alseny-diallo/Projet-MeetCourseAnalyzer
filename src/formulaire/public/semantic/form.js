
let questionList = ['1. Comment qualifieriez-vous la charge de travail demandée par le cours ?',
	'2. Le cours a t-il répondu à vos attentes ?',
	'3. Le cours a t-il contribué à votre connaissance en la matière ?',
	'4. Comment qualifieriez-vous le  cours ?',
	'5. Que pensez-vous du rythme du cours ?',
	'6. Pensez-vous que les supports utilisés (support papier, présentation) durant le cours ont été utiles ?',
	'7. Quelle est la probabilité que vous recommandiez le cours à d\'autres étudiants ?',
	'8. Dans l\'ensemble, êtes-vous satisfait(e) du contenu du cours ?',
	'9. Dans l\'ensemble, quel est votre degré de satisfaction concernant le cours ?',
	'10. Si vous avez d\'autres suggestions ou commentaires concernant le cours, merci de nous en faire part.',
	'11. Quel était le niveau de qualité global de l’instructeur pour ce cours ?',
	'12. Le cours était-il bien organisé ?',
	'13. Quel était le niveau de connaissances du sujet de cours de l’instructeur ?',
	'14. Les explications de l’instructeur étaient-elles claires ?',
	'15. De quelle manière l’instructeur était-il concerné par l’apprentissage des élèves dans ce cours ?',
	'16. L’instructeur avait-il une attitude encourageante envers les élèves ?',
	'17. L’instructeur était-il disponible en dehors du cours ?',
	'18. Dans quelle mesure les critères d’évaluation du cours étaient-ils clairs ?']; 
let reponseList = [
	[	'Beaucoup trop importante',
		'Trop importante',
		'Un peu trop importante',
		'Ni trop importante ni trop insuffisante',
		'Un peu trop insuffisante',
		'Trop insuffisante',
		'Beaucoup trop insuffisante'],
	
	[	'Extrêmement bien répondu',
		'Très bien répondu',
		'Assez bien répondu',
		'Peu répondu',
		'Pas du tout répondu'],
	
	[	'Énormément contribué',
		'Beaucoup contribué',
		'Plutôt contribué',
		'Peu contribué',
		'Pas du tout contribué'],
	
	[	'Extrêmement facile',
		'Très facile',
		'Assez facile',
		'Ni facile ni difficile',
		'Assez difficile',
		'Très diffice',
		'Extrêmement diffice'],
	
	[	'Beaucoup trop rapide',
		'Trop rapide',
		'Un peu trop rapide',
		'Ni trop rapide ni trop lent',
		'Un peu trop lent',
		'Trop lent',
		'Beaucoup trop lent'],
	
	[	'Extrêmement utiles',
		'Très utiles',
		'Assez bien utiles',
		'Peu utiles',
		'Pas du tout utiles'],

	[ 	'Extrêmement probable',
		'Fortement probable',
		'Modérément probable',
		'Peu probable',
		'Pas du tout probable'],
	
	[	'Extrêmement satisfait(e)',
		'Très satisfait(e)',
		'Assez satisfait(e)',
		'Ni satisfait(e) ni insatisfait(e)',
		'Assez insatisfait(e)',
		'Très insatisfait(e)',
		'Extrêmement insatisfait(e)',],
	
	[	'Extrêmement satisfait(e)',
		'Très satisfait(e)',
		'Assez satisfait(e)',
		'Ni satisfait(e) ni insatisfait(e)',
		'Assez insatisfait(e)',
		'Très insatisfait(e)',
		'Extrêmement insatisfait(e)'],

	[''],
	
	[	'Excellent',
		'Très bien',
		'Bon',
		'Assez bon',
		'Faible'],
	
	[	'Extrêmement bien organisé',
		'Très bien organisé',
		'Assez bien organisé',
		'Pas très bien organisé',
		'Pas du tout organisé'],
	
	[	'Excellent niveau de connaissance',
		'Très bien niveau de connaissance',
		'Assez bon niveau de connaissance',
		'Niveau de connaissance mediocre',
		'Aucune connaissance'],
	
	[	'Extrêmement claires',
		'Très claires',
		'Assez claires',
		'Peu claires',
		'Pas claires du tout'],
	
	[	'Extrêmement concerné',
		'Très concerné',
		'Assez concerné',
		'Peu concerné',
		'Pas concerné du tout'],

	[	'Extrêmement encourageante',
		'Très encourageante',
		'Assez encourageante',
		'Peu encourageante',
		'Pas encourageante du tout'],

	[	'Extrêmement disponible',
		'Très disponible',
		'Assez disponible',
		'Peu disponible',
		'Pas disponible du tout'],

	[	'Extrêmement clairs',
		'Très clairs',
		'Assez clairs',
		'Peu clairs',
		'Pas clairs du tout']
	];

let numberOfItems = 10;
let first = 0;
let actualPage = 1;
let data ;
showList();


function nextPage(){								//charge la nouvelle page comme il s'agit de pagination
	var t = document.getElementsByName('group9');
	if(sessionStorage.getItem(9) == null){
		var val = t[0].value;
		sessionStorage.setItem(9, val);
	}else{
		sessionStorage.removeItem(9);
		var val = t[0].value;
		sessionStorage.setItem(9, val);
	}

	if(first+numberOfItems <= 17){
  		first+=numberOfItems;
  		actualPage ++;
  		showList();
  	}
}


function previous(){								//utiliser sur lles bouton de pagination pour aller sur precedent
	if(first-numberOfItems >= 0){
    	first-=numberOfItems;
    	actualPage --;
    	console.log('ok');
    	showList();
  	}
}


function func(i){									//utiliser si un reponse est clique, elle recupere la reponse et la stock
	var select = document.getElementsByName(`group${i}`);
	for(var k = 0; k < select.length; k++){
		if(select[k].checked){
			if(sessionStorage.getItem(i) == null){
				var val = select[k].value;
				sessionStorage.setItem(i, val);
			}else{
				sessionStorage.removeItem(i);
				var val = select[k].value;
				sessionStorage.setItem(i, val);
			}
		}
	}
}


function fin(){										//utiliser lorsque le bouton fin est appuye il calcule la note puis envois tous vers le serveur
	let reponse = [];
	let note = null;
	let point = 0;
	let nbr = 0;
	let valMax = 0;
	for(let i = 0; i < 18; i++){
		if(i == 9){
			if(sessionStorage.getItem(i) == ''){
				reponse[i] = null;
				commentaireForm = null;
			}else{
				reponse[i] = sessionStorage.getItem(i);
				commentaireForm = sessionStorage.getItem(i);
			}
		}else{
			reponse[i] = sessionStorage.getItem(i);
		}
	}
	sessionStorage.clear();

	for(let i = 0; i < 18; i++){
		if(reponse[i] != null && i != 9){
			nbr++;
			valMax += reponseList[i].length;
			for(let j = 0; j < reponseList[i].length; j++){
				if(reponseList[i][j] == reponse[i]){
					point += reponseList[i].length - j;
					console.log(i+" a la valeur "+(reponseList[i].length - j))
				}
			}
		}else{
			console.log(i+" est null.")
		}
	}
	let reponseForm = "";
	for(let i = 0; i < 18; i++){
		reponseForm += reponse[i]+", ";
	}
	console.log("_______")
	console.log("Le nbr de point = "+point)
	console.log("Le nbr de reponse = "+nbr)
	if(nbr > 0){
		note = (point * 20) / valMax;
		note = note.toFixed(2);
	}
	if(point != 0){
		console.log("La note est "+note)
	}else{
		console.log("Il n'a rien repondu !")
	}

	axios.post('https://formulairee.herokuapp.com/', {  	//utiliser sur heroku
	// axios.post('http://localhost:3000/', {				//utiliser en local
	    reponseForm : {reponseForm},		
	    note : {note},
	    commentaireForm : {commentaireForm}
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
	    console.log(error);
	});

	alert('Reponse envoye avec succes !')
	//window.location.href = "{% url 'http://localhost:3000/' %}"
}


function showList(){
  let tableList = "";
  for(let i = first; i < first + numberOfItems; i++){
  	if(i < questionList.length){
  	  if(i == 9){
  	  	tableList += `
    	  <div id="group9" class="col-md-8 ml-auto mr-auto card border-dark mb-3" style="position: static;">
      		<div class="padding">
          	  <div class="container card-header mr-auto ml-auto">
  				<div class="container text-center card-header mr-auto ml-auto"> 
        		  <h4 class="q1">${questionList[i]}</h4>
        		</div>
        		<br/>
		        <textarea class="form-control" name="group9" rows="3"></textarea>
		        <br/>
		      </div>  
		    </div>`;
		continue;
  	  }else{
	  	tableList += `
    	  <div id="group${i}" class="col-md-8 ml-auto mr-auto card border-dark mb-3" style="position: static;">
      		<div class="padding">
          	  <div class="container card-header mr-auto ml-auto">
  				<div class="container text-center card-header mr-auto ml-auto"> 
        		  <h4 class="q1">${questionList[i]}</h4>
        		</div>
          		<table class="tableau">
            	  <tr>
            		<td>`  
		  	for(let j = 0; j < reponseList[i].length; j++){
	    		if((reponseList[i].length)/2 > (j+1)){
	      			tableList += `
	            	  <div class="form-check">
	              		<input class="form-check-input" type="radio" name="group${i}" value="${reponseList[i][j]}" onclick="func(${i})">
	              		<label class="form-check-label" for="gridRadios1">${reponseList[i][j]}</label>
	            	  </div>`  	
	    		}else if((reponseList[i].length+1)/2 == j){
	    			tableList += `
    				</td>
    				<td>
    				  <div class="form-check">
	              		<input class="form-check-input" type="radio" name="group${i}" value="${reponseList[i][j]}" onclick="func(${i})">
	              		<label class="form-check-label" for="gridRadios1">${reponseList[i][j]}</label>
	            	  </div>`
	    		}else{
	    			tableList += `
	            	  <div class="form-check">
	              		<input class="form-check-input" type="radio" name="group${i}" value="${reponseList[i][j]}" onclick="func(${i})">
	              		<label class="form-check-label" for="gridRadios1">${reponseList[i][j]}</label>
	            	  </div>` 
	    		}
			    
		    }
		tableList += `
					</td>
            	  </tr>
          		</table> 
          	  </div>
          	</div>
    	  </div>` 
	  }
	} 
  }
  
  document.getElementById('toutList').innerHTML = tableList;
  showPageInfo();
}

function showPageInfo(){
	if(actualPage == 1){
		document.getElementById('pre').classList.add('hidden');
		document.getElementById('sui').classList.remove('hidden');
		document.getElementById('ter').classList.add('hidden');
    }else if(actualPage == 2){
    	document.getElementById('pre').classList.remove('hidden');
    	document.getElementById('sui').classList.add('hidden');
    	document.getElementById('ter').classList.remove('hidden');
    }
}
