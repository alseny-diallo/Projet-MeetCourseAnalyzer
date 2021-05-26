let time = new Date()

let debutDate = time.getFullYear()+'-0'+time.getMonth()+'-'+time.getDate()
let debutTime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()

alert(debutDate +'\n'+debutTime)

let classe = document.querySelector('#classe').value
let matiere = document.querySelector('#metiere').value

let data = {
  dateDebut : debutDate,
  TimeDebut : debutTime,
  matiere : matiere,
  classe : classe
}

let fetchOptions = {
  method:'POST',
  mode: 'CORS',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}

let Promise = fetch('http://localhost:3000/auth/infos',fetchOptions)

Promise.then(res =>{
  console.log(res)
  return res.JSON()
})