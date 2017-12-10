$(document).on("click", "#submit", function (event) {
    if ($("#name").val() == '' || $("#photo").val() == '') {
        alert("Name and photo are required!");
    } else {
        var nData = {
            "name": "",
            "photo": "",
            "scores": []
        }
        nData.name = $("#name").val();
        nData.photo = $("#photo").val();

        for (let x = 1; x < 11; x++) {
            nData.scores.push($("#sel" + x).val());
        }
        $.post("/api/friends", nData, function (res) {
            console.log(res);
            $("#modal").html("<h1>" + res.name + "</h1><br");
            $("#modal").append("<img src=\"" + res.photo + "\">");
            $('#myModal').modal('show');
        });

        nData.scores = [];
    }
});