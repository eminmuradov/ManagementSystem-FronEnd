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
        alert("Registration is successfully!")
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
            console.log(response.data.role)

            if (response.responseStatus === 200 && response.data.role === 'ADMIN') {
                $(document).ready(function () {
                    sessionStorage.setItem("role",'ADMIN')
                    window.location = 'index.jsp';
                });

            } else if (response.responseStatus === 200 && response.data.role === 'USER') {
                $(document).ready(function () {
                   sessionStorage.setItem('role', 'USER');
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



function preventBack() {
    window.history.forward();
}
window.onunload = function() {
    null;
};
setTimeout("preventBack()", 0);