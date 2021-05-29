let participants = document.querySelectorAll(".ZjFb7c");
let btn_refresh = document.querySelector("#refresh");
let btn_save = document.querySelector("#save");

//le code pour la liste des participants
function refresh() {
  //le code pour rafraichir
  liste();
  console.log("cas meme");
}

function fin() {
  //le code pour apres avoir fini
  //matiere = getCookie("matiere");
  //classe = getCookie("classe");
  //console.log(matiere + "\n" + classe);
}

function liste() {
  participants = document.getElementsByClassName("ZjFb7c");
  let aff = "";
  for (let i = 0; i < participants.length; i++) {
    aff += "<option value='" + i + "'>" + participants[i].innerText + "</option>";
  }

  let tableList = "";
  tableList += "<select class='form-select' size='20' aria-label='size 3 select example' style='width: 100% margin-left:auto margin-right:auto'>" + aff + "</select>";
  document.getElementById("list").innerHTML = tableList;
}

//affiche liste au debut
liste();

console.log(participants);

btn_refresh.addEventListener("click", () => {
  refresh();
}, false);
btn_save.addEventListener("click", fin(), false);