async function check_api_connection() {
    var res = await api_connection_check();
    if (res.success != true) {
        console.log("API Connection failed: " + res.message);
        window.location.replace("/login");
    }
    var count = localStorage.getItem('pages_loaded') || 0;
    count++;
    localStorage.setItem('pages_loaded', count.toString());
}

function get_api_url() {
    return localStorage.getItem('api_url');
}
function get_api_token() {
    return localStorage.getItem('api_token');
}
function get_frontend_version() {
    return '0.0 (testing)';
}

function update_last_api_call_duration(duration) {
    const logtime = new Date().getTime();
    append_api_request_duration_statistic(logtime, duration);
    try {
        document.getElementById("last_api_call_response_duration").innerHTML = duration + " ms";
    } catch {
        ;;
    }
}

function truncateByDecimalPlace(value, numDecimalPlaces) {
    return Math.trunc(value * Math.pow(10, numDecimalPlaces)) / Math.pow(10, numDecimalPlaces)
}

function append_api_request_duration_statistic(logtime, duration) {
    var stat = JSON.parse(localStorage.getItem('api_response_statistic'));
    if (stat == null) {
        localStorage.setItem('api_response_statistic', JSON.stringify([{logtime: logtime, duration: duration}]));
    } else {
        stat.push({logtime: logtime, duration: duration});
        localStorage.setItem('api_response_statistic', JSON.stringify(stat));
    }
}

// Validation functions
function validate_ipv4(addr) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(addr)) {
        return true;
    } else {
        return false;
    }
}

function validate_weburl(url) {
    try {
        var test_url = new URL(url);
    } catch (_) {
        return false;
    }
    return true;
}