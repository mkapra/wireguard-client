// api connection check
async function api_connection_check(force = false) {
    var res = {
        success: true,
        message: "connected"
    }

    if (force == true) {
        var forced_connection_checks = localStorage.getItem('api_forced_conncheck_count') || 0;
        forced_connection_checks++;
        localStorage.setItem('api_forced_conncheck_count', forced_connection_checks);
    }

    // validate the api url
    if (! validate_weburl(get_api_url())) {
        res.success = false;
        res.message = "Invalid API URL!";
        console.log(res.message);
        return res;
    }

    // uncomment for testing with actual API
    return res;

    // avoid spamming the API with connection checks
    var count = localStorage.getItem('api_conncheck') || 0;
    if (count < 10 && count != 0 && force == false) {
        count++;
        localStorage.setItem('api_conncheck', count.toString());
        return res;
    }
    if (count < 10 && count == 0 && force == false) {
        count++;
        localStorage.setItem('api_conncheck', count.toString());
        return res;
    }

    // check actual connection
    const response = await post_with_fetch("conncheck", {});
    if (response.error) {
        res.success = false;
        res.message = response.message;
        console.log(res.message);
        return res;
    } else {
        var connection_checks = localStorage.getItem('api_conncheck_count') || 0;
        connection_checks++;
        localStorage.setItem('api_conncheck_count', connection_checks);
        localStorage.setItem('api_conncheck', 0);
    }

    return res;
}

// api version information
async function get_api_version() {
    var api_version = localStorage.getItem('api_version');
    if (api_version == null) {
        api_version = await get_with_fetch(get_api_url() + "/version");
        localStorage.setItem('api_version', JSON.stringify(api_version));
    }
    try {
        api_version = JSON.parse(api_version);
    } catch (_) {
        api_version = await get_with_fetch(get_api_url() + "/version");
        localStorage.setItem('api_version', JSON.stringify(api_version));
    }
    return api_version;
}


//=============================================================================================//
// post with fetch, will POST arbitrary data to the specified endpoint
async function post_with_fetch(endpoint, data) {
    const start_time = new Date().getTime();
    const api_url = get_api_url();
    var url = api_url + "/" + endpoint;
    var response;
    var result = {};

    try {
        response = await fetch(url, {
            'method': 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-API-Token': get_api_token(),
            },
            body: JSON.stringify(data)
        });
        result = await response.json();
    } catch (error) {
        result = {
            error: true,
            message: error
        }
    }

    result.API_CLIENT_REQUEST_TIME = new Date().getTime() - start_time;
    if (result.error) {
        console.log(result);
    }
    update_last_api_call_duration(result.API_CLIENT_REQUEST_TIME);
    return result;
}

// get with fetch function, returns the API endpoint's response to a GET reqeust
async function get_with_fetch(url) {
    const start_time = new Date().getTime();
    var response;
    var result = {};

    try {
        response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-Token': get_api_token()
            }
        });
        result = await response.json();
    } catch (error) {
        result = {
            error: true,
            message: error
        }
    }

    result.API_CLIENT_REQUEST_TIME = new Date().getTime() - start_time;
    if (result.error) {
        console.log(result);
    }
    update_last_api_call_duration(result.API_CLIENT_REQUEST_TIME);
    return result;
}