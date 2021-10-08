function getGlobals() {
    api_url = global_get_api_url();
    api_token = global_get_api_token();

    if (api_url == '' || api_token == '' || api_url == null || api_token == null) {
        console.log("API Url and/or Token are not defined!");
        window.location.replace("/views/login/index.html");
    }

    document.getElementById('page_header_api_url').innerHTML = global_get_api_url();
}

function global_get_api_url() {
    return localStorage.getItem('api_url');
}

function global_get_api_token() {
    return localStorage.getItem('api_token');
}

// get with fetch function, returns the API endpoint's response to a GET reqeust
async function get_with_fetch(endpoint) {
    api_token = global_get_api_token();
    api_url = global_get_api_url();

    var url = api_url + "/" + endpoint;
    console.log("Querying API with GET: " + url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-Token': api_token    
        }
    });
    const result = await response.json();

    return result;
}

// post with fetch, will POST arbitrary data to the specified endpoint
async function post_with_fetch(endpoint, data) {
    api_token = global_get_api_token();
    api_url = global_get_api_url();

    var url = api_url + "/" + endpoint;
    console.log("Querying API with POST: " + url);
    const response = await fetch(url, {
        'method': 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-API-Token': api_token
        },
        body: JSON.stringify(data)
    });
    const result = response.json();

    return result;
}


// Fill Any Table with data
async function fillTable(endpoint, table_id) {

    // get data from API
    const response = await get_with_fetch(endpoint);

    // get table and reset contents
    var table = document.getElementById(table_id);
    table.innerHTML = "";

    // populate table
    for (var item in response) {

        // get the amount of cols to create
        keys = Object.keys(response[item]);
        len = keys.length;

        // create row and cells
        var row = table.insertRow(0);
        var cols = []
        for (var i = 0; i < len; i++) {
            cols[i] = row.insertCell(i);
            console.log(response[item][keys[i]]);
            cols[i].innerHTML = response[item][keys[i]];
            cols[i].style.border = "none";
        }
    }
}