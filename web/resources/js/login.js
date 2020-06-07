function signUp() {

    var name = $('#name').val()
    var surname = $('#surname').val()
    var email = $('#email').val()
    var password = $('#password').val()
    var JSONObject = {"name": name, "surname": surname, "email": email, "password": password};
    var jsonData = JSON.stringify(JSONObject);

    $.ajax({
        url: 'http://localhost:8070/services/save',
        type: 'post',
        dataType: 'json',
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            alert(JSON.stringify(response));
            console.log(jsonData)
        },
        error: function (err) {
            alert(JSON.stringify(err));
            console.log(jsonData)
        }
    })
}

$(document).ready(function () {
    $('#signUp').click(function () {
        location.reload();
    })
});


function login() {
    const email = $('#loginEmail').val()
    const password = $('#loginPassword').val()
    const JSONObject = {"email": email, "password": password};
    const jsonData = JSON.stringify(JSONObject);

    $.ajax({
        url: 'http://localhost:8070/services/authenticate',
        type: 'post',
        dataType: 'json',
        data: jsonData,
        contentType: "application/json",
        success: function (response) {
            console.log(response)

            if (response.responseStatus === 200 && response.data.role === 'ADMIN') {
                $(document).ready(function () {
                    sessionStorage.setItem('CURRENT_USER_ROLE', 'ADMIN');
                    $('#add-student').show()
                    window.location = 'index.jsp';
                });

            } else if (response.responseStatus === 200 && response.data.role === 'USER') {
                $(document).ready(function () {
                    sessionStorage.setItem('CURRENT_USER_ROLE', 'USER');
                    $('#add-student').hide()
                    window.location = 'index.jsp';
                });
            }
            alert(response.message.defaultMessage);

        },
        error: function (err) {
            alert(err);
            console.log(jsonData)
        }
    });
}