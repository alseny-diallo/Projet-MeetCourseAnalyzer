$(document).ready(function ()   {
    $.ajax({
        url:"http://localhost/graph/backend/evolutionConnexion.php",
        method: "GET",
        success: function (data) {
            console.log(data); 
            var nom = [];
            var qualiteConnexion  = [];
            for(var i in data){
                nom.push(data[i].prenom+" "+data[i].nom+"("+data[i].idEtudiant+")");
                qualiteConnexion.push(data[i].nombreDeconnexion);
            }
            var chartdata = {
                labels:nom,
                datasets: [
                    {
                        label: 'nombre de deconnexion par etudiant',
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        data: qualiteConnexion
                    }
                ]
            };
            var ctx = $("#mycanavas3");
            var barGraph = new Chart(ctx,{
                type: 'bar',
                data:chartdata
            });
        },
        error: function (data) {
            console.log(data);
        }
    });
});
