$(document).ready(function ()   {
    $.ajax({
        url:"http://localhost/graph/backend/evolutionNote.php",
        method: "GET",
        success: function (data) {
            console.log(data); 
            var seance = [];
            var notes  = [];
            for(var i in data){
                seance.push("Seance "+data[i].numSeance);
                notes.push(data[i].note);
            }
            var chartdata = {
                labels:seance,
                datasets: [
                    {
                        label: 'notes de seance',
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
                        data: notes
                    }
                ]
            };
            var ctx = $("#mycanavas1");
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
