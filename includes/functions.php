<?php
    //store the results
    $result = array();
    
    function getPortfolioData($conn, $projects) {
        
        if (is_null($projects)) {
            $query = "SELECT * FROM tbl_projects";
        } else {
            $query = "SELECT * FROM tbl_projects WHERE id='".$projects."'";
        };

        // $query = is_null($prof) ? "SELECT * FROM profs" : "SELECT * FROM profs WHERE id='".$prof."'";
        
        // this is the database result -> the raw data that SQL gives us
        $runQuery = $conn->query($query);    

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
         $result[] = $row;
        }

        return $result;
    }
