var currentPage = location.pathname;
window.onload = function () {
    var xhttp = new XMLHttpRequest();
    var oeMenu = document.getElementById("navMenu");
    xhttp.open("GET", "NavMenu.html", false);
    xhttp.send();
    oeMenu.innerHTML = xhttp.responseText;

    /* This next chunk highlights the name of the currently selected page - HS 27/06*/
    var linkList = oeMenu.getElementsByTagName("a");
    for (i = 0; i < linkList.length; i++) {
        if ("/" + linkList[i].getAttribute("href") == this.currentPage) {
            linkList[i].parentElement.style = "background-color: rgba(186,0,181,0.5);";
            linkList[i].style = "color: rgb(255,255,255);"
        }
    }
}