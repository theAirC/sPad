// External HTML loader for sPad
// Uses AJAX to GET the external HTML file.
// The content replaces the entire document.

(function() {
    var req = new XMLHttpRequest();
    req.open("get", "https://theairc.github.io/sPad/sPad.html");
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            document.open();
            if (req.status == 200) document.write(req.responseText);
            else document.write("Request failed.");
            document.close();
        }
    };
    req.send(null);
})();
