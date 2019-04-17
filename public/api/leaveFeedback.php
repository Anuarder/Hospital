<?php

    require_once "./config.php";
    $feeb = json_decode(file_get_contents('php://input'), true); 
    $email = $feeb["email"];
    $message = $feeb["message"];
    $query = "INSERT INTO feedback (email, message)
    VALUES ('$email', '$message');";
    $result = $db->query($query);