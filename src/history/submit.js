//submit without refresh page
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var classes = document.getElementById("classes").value;
        var listMatiere = document.getElementById("listMatiere").value;
        $.post("./backend/session.php",{classes: classes,listMatiere: listMatiere},function (data) {
            console.log(data);
        });
    });
});