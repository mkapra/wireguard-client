function getGlobals() {
    document.getElementById('page_header_api_url').innerHTML = global_get_api_url();
}

function global_get_api_url() {
    return localStorage.getItem('api_url');
}

function global_get_api_token() {
    return localStorage.getItem('api_token');
}