function searchTable() {
    
    // Declare Variables
    var input, filter, table, tr, td, i, txtValue, j, s;
    var search_result_count = 0;

    // populate variables
    input  = document.getElementById("search_input");
    filter = input.value.toUpperCase();
    table  = document.getElementById("table_to_search");
    tr     = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the query
    for (i = 1; i < tr.length; i++) { // start at the first actual ROW, 0 is the header
        td = tr[i].getElementsByTagName("td");
        var row_results = 0;

        for (j = 0; j < td.length; j++) {
            s = td[j];
            txtValue = s.textContent || s.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                row_results++;
            }
        }

        if (row_results == 0) {
            tr[i].style.display = "none";
        } else {
            tr[i].style.display = "";
            search_result_count++;
        }
    }

    // set the inner html to nothing when there is no search
    if (new String("") == filter) {
        document.getElementById("search_result_count").innerHTML = "No Search";
        document.getElementById("search_result_count").style.color = "#464640";
    } else {
        document.getElementById("search_result_count").innerHTML = search_result_count + " results";
        if (search_result_count > 0) {
            document.getElementById("search_result_count").style.color = "green";
        } else {
            document.getElementById("search_result_count").style.color = "red";
        }
    }
}