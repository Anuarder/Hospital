<?php

    require_once "./config.php";
    
    $query = "SELECT * FROM personal;";
    $result = $db->query($query);
    $dbdata = array();
    while ( $row = $result->fetch_assoc())  {
        $dbdata[]=$row;
    }
    echo json_encode($dbdata);