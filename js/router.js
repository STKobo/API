const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/testApi": "/pages/testApi.html",
};

const routeJS = {
    "/testApi": "/js/testApi.js",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];

    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    if(routeJS[path] != "" && routeJS[path] != undefined) {
        var fileref=document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", routes[path]);

        document.querySelector("body").appendChild(fileref);
    }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();