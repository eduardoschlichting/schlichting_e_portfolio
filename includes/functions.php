<?php
    //store the results
    $result = array();
    
    function getPortfolioData($conn, $projects) {
        
        if (is_null($projects)) {
            $query = "SELECT
            p.*,
            GROUP_CONCAT(t.Tag SEPARATOR ' // ') AS Tags,
            n.Noteworthy AS Note
        FROM
            tbl_projects AS p,
            tbl_tags AS t,
            tbl_noteworthy AS n,
            tbl_projects_tags AS p_t
        WHERE
            p.ID = p_t.Project_ID AND t.ID = p_t.Tag_ID AND n.ID = p_t.Note_ID
        GROUP BY
            p.ID";
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
