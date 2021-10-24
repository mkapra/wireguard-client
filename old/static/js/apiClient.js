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
    const result = await response.json();

    return result;
}

// get with fetch function, returns the API endpoint's response to a GET reqeust
async function get_with_fetch(url) {

    console.log("Querying API with GET: " + url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-API-Token': global_get_api_token()
        }
    });
    const result = await response.json();

    return result;
}


// API Specific functions
async function get_interface_list() {
    const url = global_get_api_url() + "/interfaces";
    return await get_with_fetch(url);
}

async function get_peer_list() {
    const url = global_get_api_url() + "/peers";
    return await get_with_fetch(url);
}

async function get_dns_server_list() {
    const url = global_get_api_url() + "/dns_servers";
    return await get_with_fetch(url);
}