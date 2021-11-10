function init_nav() {
    const nav = document.getElementById('main_page_navigation');
    const nav_targets = [
        { link: '/',                    display_name: 'Home',                   class: ['navlink', 'navhome'] },

        { link: '',                     display_name: 'VPN',                    class: ['nav_section_header'] },
        { link: '/vpn/interfaces',      display_name: 'Interfaces',             class: ['navlink'] },
        { link: '/vpn/peers',           display_name: 'Peers',                  class: ['navlink'] },
        
        { link: '',                     display_name: 'Network',                class: ['nav_section_header'] },
        { link: '/system/dns-servers',  display_name: 'DNS Servers',            class: ['navlink'] },
        { link: '/system/iptables',     display_name: 'Firewall (ACL)',         class: ['navlink'] },
        { link: '/vpn/networks',        display_name: 'VPN Subnets',            class: ['navlink'] },

        { link: '',                     display_name: 'Statistics',             class: ['nav_section_header'] },
        { link: '/vpn/statistics',      display_name: 'Peer traffic',           class: ['navlink'] },
        { link: '/system/statistics',   display_name: 'Frontend',               class: ['navlink'] },

        { link: '',                     display_name: 'System',                 class: ['nav_section_header'] },
        { link: '/login',               display_name: 'Clear Session',          class: ['navlink'] },
    ]

    for (i = 0; i < nav_targets.length; i++) {
        var cur = nav_targets[i];
        var new_item;

        // create elements
        if (cur.class.includes('navlink', 0)) {
            new_item = document.createElement('a');
            new_item.innerHTML = cur.display_name;
            new_item.href = cur.link;
        } else {
            new_item = document.createElement('span');
        }
        
        // add css classes
        for (j = 0; j < cur.class.length; j++) {
            new_item.classList.add(cur.class[j]);
            new_item.innerHTML = cur.display_name;
        }

        // add to the navbar
        nav.appendChild(new_item);
    }

    return;
}

async function init_footer() {
    document.getElementById("current_api_connection_url").innerHTML = get_api_url();
    document.getElementById("current_frontend_version").innerHTML = get_frontend_version();
    
    var api_version_info = await get_api_version();
    document.getElementById("current_api_connection_version").innerHTML = api_version_info.api_version + " (" + api_version_info.api_version_name + ")";
}