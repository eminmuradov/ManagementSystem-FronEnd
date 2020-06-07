$(document).ready(function () {
    $('#example').DataTable();
});


function addStudentBtn() {
    var name = $('#name').val()
    var surname = $('#surname').val()
    var sector = $('#sector').val()
    var JSONObject = {"name": name, "surname": surname, "sector": sector};
    var jsonData = JSON.stringify(JSONObject);

    $.ajax({
        url: 'http://localhost:8070/services/students',
        type: 'post',
        dataType: 'json',
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            alert(" Student added successfully!");
            console.log(response)
        },
        error: function (err) {
            alert(err);
            console.log(jsonData)
        }
    })
}

$(document).ready(function () {
    $('#add-student-btn').click(function () {
        location.reload();
    })
});


function addFile() {
    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);

    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://localhost:8070/services/upload",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
            alert("File Upload Successfully!")
            $('#upload').click(function () {
                location.reload();
            })
            console.log("SUCCESS : ", data);
        },
        error: function (e) {
            console.log("ERROR : ", e);
        }
    });
}


$(document).ready(function () {
    $.getJSON("http://localhost:8070/services", function (data) {
        var student_data = '';
        $.each(data, function (key, value) {
            student_data += '<tr>';
            student_data += '<td>' + value.id + '</td>';
            student_data += '<td>' + value.name + '</td>';
            student_data += '<td>' + value.surname + '</td>';
            student_data += '<td>' + value.sector + '</td>';
            student_data += '</tr>';
        });
        $('#example').append(student_data)
    })
})

$(document).ready(function(){
    $("button").click(function(){
        $.get( "/hello/{id}", function( data ) {
            alert( "Delete was performed." );
        });
    });
});

