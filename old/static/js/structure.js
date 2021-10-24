function createNavBody(active_page) {

    var nav_links = document.getElementById('nav_links');

    // define navigation sections
    var sections = [
        { name: "VPN", id: "nav_section_vpn" },
        { name: "System", id: "nav_section_system" },
    ]

    // define navigtaion targets here
    var targets = [
    //    { target: "/views/interfaces/index.html", name: "Interfaces",  id: "nav_link_interfaces", sectionid: "nav_section_vpn"    },
        { target: "/views/peers/index.html",      name: "Peers",       id: "nav_link_peers",      sectionid: "nav_section_vpn"    },
        { target: "/views/system/index.html",     name: "DNS Servers", id: "nav_link_system",     sectionid: "nav_section_system" },
        { target: "/views/login/index.html",      name: "Logout",      id: "nav_link_logout" }
    ]

    // make navigation sections
    for (i = 0; i < sections.length; i++) {
        console.log("Creating Section (" + sections[i].id + ")");
        var button = document.createElement('button');
        button.classList.add('dropdown-btn');
        var caret_down = document.createElement('i');
        caret_down.classList.add('fa');
        caret_down.classList.add('fa-caret-down');
        button.appendChild(caret_down);
        button.innerHTML = sections[i].name;
        button.id = sections[i].id;

        var container = document.createElement('div');
        container.classList.add('dropdown-container');

        // create links inside the corresponding container
        for (j = 0; j < targets.length; j++) {
           // console.log(targets[j].sectionid  + ":::" + sections[i].id + "(" + targets[j].id + ")");
            if ( targets[j].sectionid === sections[i].id ) {
                console.log("Creating Link for (" + targets[j].id + ")");
                var a = document.createElement('a');

                // fill in contents
                a.href = targets[i].target;
                a.innerHTML = targets[i].name;
        
                a.id = targets[i].id;
                a.dataset.sectionid = targets[i].sectionid;
               // a.classList.add("navlink");
                if (active_page == targets[i].id) {
                    a.classList.add("active");
                }
                
                // add the completed links to the navbar
                container.appendChild(a);
            }
        }

        nav_links.appendChild(button);
        nav_links.appendChild(container);
    }
}