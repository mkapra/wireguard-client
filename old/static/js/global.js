function getGlobals() {
    return;
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

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}