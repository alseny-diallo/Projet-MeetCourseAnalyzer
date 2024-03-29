$(document).ready(function ()   {
    $.ajax({
        url:"http://localhost/graph/backend/evolutionAbsence.php",
        method: "GET",
        success: function (data) {
            console.log(data); 
            var etudiant = [];
            var jours  = [];
            for(var i in data){
                etudiant.push(data[i].prenom+" "+data[i].nom);
                jours.push(data[i].day);
            }
            var chartdata = {
                labels:etudiant,
                datasets: [
                    {
                        label: 'nombre absence',
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
                        data: jours
                    }
                ]
            };
            var ctx = $("#mycanavas2");
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
