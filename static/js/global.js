function getGlobals() {
    api_url = global_get_api_url();
    api_token = global_get_api_token();

    if (api_url == '' || api_token == '') {
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
