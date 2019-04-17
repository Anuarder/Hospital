<?php

    require_once "./config.php";
    $contact = json_decode(file_get_contents('php://input'), true); 
    $name = $contact["name"];
    $email = $contact["email"];
    $message = $contact["message"];
    $query = "INSERT INTO requests (`user`, `email`, `message`)
    VALUES ('$name', '$email', '$message');";
    $result = $db->query($query);