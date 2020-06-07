<%--
  Created by IntelliJ IDEA.
  User: eminm
  Date: 05-Jun-20
  Time: 18:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login </title>
    <script type="text/javascript" src="resources/js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="resources/js/login.js"></script>
    <script type="text/javascript" src="resources/js/index.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script>
        $(function () {
            $("#tabs").tabs();
        });
    </script>
</head>
<body>

<div id="tabs" style="margin-right: 1000px">
    <ul>
        <li><a href="#tabs-1">Sign In</a></li>
        <li><a href="#tabs-2">Sign Up</a></li>
    </ul>
    <div id="tabs-1">
        <input id="loginEmail" name="email" type="text" placeholder="Email"><br><br>
        <input id="loginPassword" name="password" type="password" placeholder="Password"><br><br>
        <button type="submit" onclick="login()">Login</button>
    </div>

    <div id="tabs-2">
        <input id="name" name="name" type="text" placeholder="Name"><br><br>
        <input id="surname" name="surname" type="text" placeholder="Surname"><br><br>
        <input id="email" name="email" type="text" placeholder="Email"><br><br>
        <input id="password" name="password" type="password" placeholder="Password"><br><br>
        <button id="signUp" type="submit" onclick="signUp()">Sign Up</button>
    </div>


</div>
</body>
</html>
