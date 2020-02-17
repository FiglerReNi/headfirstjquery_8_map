<?php
if(isset($_GET['action']) && $_GET['action'] == 'items') {
    type();
}
elseif(isset($_GET['action']) && $_GET['action'] == 'item'){
    $query = 'SELECT latitude, longitude, TYPE AS "type"
              FROM form
              WHERE id = '.$_GET['id'];
    $result = dbConnection($query);
    $resultArray = [];
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($resultArray, $row);
    }
    echo json_encode($resultArray);
    exit;
}
elseif(isset($_GET['action']) && $_GET['action'] == 'select'){
    $query = 'SELECT DISTINCT TYPE AS "type" FROM form';
    $result = dbConnection($query);
    $resultArray = [];
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $resultArray[] = $row['type'];
    }
    echo json_encode($resultArray);
    exit;
}
elseif(isset($_POST['data']) && $_POST['data'] != ''){
    type($_POST['data']);
}

function dbConnection($query)
{
    $link = mysqli_connect('127.0.0.1', 'user_db_user', 'user_db_password') OR die('Could not connect to database.');
    mysqli_select_db($link, 'user_interface');
    return mysqli_query($link, $query);
}

function type($name = ''){
    if($name != ''){
        $name = ' WHERE type = "'.$name .'"';
    }
    $query = 'SELECT id, DATE AS "date", TYPE AS "type", latitude, longitude, distance, weight, height, color
          FROM form '.$name;

    $result = dbConnection($query);
    $resultArray = [];
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($resultArray, $row);
    }
    echo json_encode($resultArray);
    exit;
}