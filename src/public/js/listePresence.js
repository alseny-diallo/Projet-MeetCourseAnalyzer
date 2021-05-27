let matiere
let classe


//get classe/matiere
matiere = getCookie("matiere")
classe = getCookie("classe")

//affiche liste
liste()



//recup cookie
function getCookie(cname) {
  	let name = cname + "="
	let decodedCookie = decodeURIComponent(document.cookie)
	let ca = decodedCookie.split('')
	for(let i = 0; i < ca.length; i++) {
	    let c = ca[i]
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1)
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length)
	    }
	}
 return null
}

//recup liste (mady)
function liste(){ 
    let tableList = ""
    tableList += `
        <select class="form-select" size="20" aria-label="size 3 select example" style="width: 100% margin-left:auto margin-right:auto">
            <option value="1">Khadim fall</option>
            <option value="2">idy sow</option>
            <option value="3">Three</option>
            <option value="4">four</option>
        </select> `

    document.getElementById('list').innerHTML = tableList
}

//refresh liste (mady)
function refresh(){

}


//fetch classe/matiere/dateheureDebut (click fin)
function fin() {
    let time = new Date()
    let debutDate = time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate()
    let debutTime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()

    let data = {
        dateDebut : debutDate,
        TimeDebut : debutTime,
        matiere : matiere,
        classe : classe
    }

    let Promise = fetch('http://localhost:3000/auth/infos', {
        method:'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    Promise.then(res =>{
        console.log(res)
        return res.JSON()
    })

}
