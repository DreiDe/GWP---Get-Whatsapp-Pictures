window.addEventListener("message", function(event) { //send message to whatsapp.php if one is recived
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/gwp/whatsapp.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            if (this.responseText == "success") {
                location = location;
            }
        };
        xhr.send("user=" + encodeURIComponent(event.data.text));
    }
}, false);

function injectJs(link) { //inject ui.js into page
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = link;
    (document.head || document.body || document.documentElement).appendChild(scr);
}

injectJs(chrome.extension.getURL("/ui.js"));
