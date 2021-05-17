/*authentification*/
  let form = document.getElementById('formulaire');

  form.addEventListener('submit', (e) => {
      let data = {
          login : form.elements.login.value,
          password : form.elements.password.value
        }
    e.preventDefault()

    const Promise = fetch('http://localhost:3000/auth', {
      method: 'POST',
      mode:'cors',
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    })

    Promise.then(res => {
    console.log(res); // log response object
    return res.json();

  })

    Promise.then((object) => {
      if (object.status == 200) {
          alert("Bienvenue!")
          window.location.replace('../html/form.html')
      }else if (object.status == 404) {
          alert("Erreur! Veuillez reesayer!")
      }
    })

  .catch(error => console.error('Error:', error))
})


/*
form.addEventListener("submit", sendData);

function sendData() {
    
    let user = document.getElementById("email").value;
    let mdp = document.getElementById("password").value;

    let creds = {
        username:user, 
        password:mdp
    };

fetch('http://localhost:3000/auth', {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
    })
    .then((reponse) => {
        if (reponse.status!==200) {
            console.log('ERREUR!'+reponse.status);
        }else{
            let content = response.json();
                console.log(content);
            }
        })
    

    .then((result) => {
        console.log(result);
    })

    .catch((error)=>{
        console.log('ERREUR: ',error);
    })
}*/
