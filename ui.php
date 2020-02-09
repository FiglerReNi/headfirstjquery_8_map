<?php
if (isset($_POST['action']) && $_POST['action'] === "mentes") {
    $date = ($_POST['date']);
    $distance = $_POST['distance'];
    $weight = $_POST['weight'];
    $height = $_POST['height'];
    $creatureColor = $_POST['creature_color_rgb'];
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];
    if(isset($_POST['creature_type'])){
        $type = $_POST['creature_type'];
    }
    if(empty($date) || !isset($type)){
        fail('Please enter a date and choose a type!');
    }
    $query = "INSERT INTO form
              SET date = '$date',
              type = '$type',
              distance = '$distance',
              weight = '$weight',
              height = '$height',
              color = '$creatureColor',
              latitude = '$latitude',
              longitude = '$longitude'";
    $result= dbConnection($query);
    if ($result) {
        success("Save successfully!");
    } else {
        fail('Insert failed!');
        exit;
    }
}

function dbConnection($query)
{
    $link = mysqli_connect('127.0.0.1', 'user_db_user', 'user_db_password') OR die('Could not connect to database.');
    mysqli_select_db($link, 'user_interface');
    return mysqli_query($link, $query);
}

function fail($message){
    die(json_encode(array('status' => 'fail', 'message' => $message)));
}

function success($message){
    die(json_encode(array('status' => 'success', 'message' => $message)));
}