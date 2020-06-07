<%--
  Created by IntelliJ IDEA.
  User: eminm
  Date: 05-Jun-20
  Time: 16:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ManagementSystem</title>
    <link rel="stylesheet" href="resources/css/index.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="resources/js/login.js"></script>
    <script type="text/javascript" src="resources/js/index.js"></script>
</head>
<body style="margin: 0px">

<div id="header" class="header"></div>
<div id="content" class="content" style="height: 1000px;">

    <div id="universal" style="width: auto;height: 165px;margin-top: 12px">
        <div id="add-student"  style="float: left" class="${sessionScope.get("CURRENT_USER_ROLE")}">
            <p style="margin-left: 10px;color: aqua">Student Info</p><br>
            <label>Name</label> <input id="name" name="name" type="text" placeholder="Name"
                                       style="margin-left: 25px"><br><br>
            <label>Surname</label> <input id="surname" name="surname" type="text" placeholder="Surname"
                                          style="margin-left: 5px"><br><br>
            <label>Sector</label>
            <select id="sector" style="width: 178px;margin-left: 19px">
                <option value="AZE">AZE</option>
                <option value="RUS">RUS</option>
                <option value="ENG">ENG</option>
            </select><br>
            <input id="add-student-btn" class="add-student" type="button" value="Add Student" onclick="addStudentBtn()">
        </div>

        <%--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--%>

        <div id="upload-div" style="float: right">
            <form method="POST" enctype="multipart/form-data" id="fileUploadForm">
                <input id="fileName" type="file" name="file"/><br/><br/>
                <input id="upload" type="submit" value="Upload" onclick="addFile()"/>
            </form>
        </div>

    </div>
    <br><br><br><br>


    <table id="example" class="display" style="width:100%">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Sector</th>

        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <th></th>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Sector</th>
        </tr>
        </tfoot>
    </table>
</div>


<div id="footer" class="footer"></div>
</body>
</html>
