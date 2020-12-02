/*// helps
var doc = document;
var conl = console;
var dist = "/dist/dgo/";
var dgo = ".dgo";

// stylesheets
var oReq_css = new XMLHttpRequest();
oReq_css.addEventListener("load", reqListener_css);
oReq_css.open("GET", dist + "css" + dgo, true);
oReq_css.send();

function reqListener_css() {
    doc.getElementById('reqL_css').innerHTML = this.responseText;
    conl.log('CSS Loaded!');
}

// header
var oReq_header = new XMLHttpRequest();
oReq_header.addEventListener("load", reqListener_header);
oReq_header.open("GET", dist + "header" + dgo, true);
oReq_header.send();

function reqListener_header() {
    doc.getElementById('reqL_header').innerHTML = this.responseText;
    conl.log('Header Loaded!');
}

// footer
var oReq_footer = new XMLHttpRequest();
oReq_footer.addEventListener("load", reqListener_footer);
oReq_footer.open("GET", dist + "footer" + dgo, true);
oReq_footer.send();

function reqListener_footer() {
    doc.getElementById('reqL_footer').innerHTML = this.responseText;
    conl.log('Footer Loaded!');
}*/

function includeDGO() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("dgo");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "*.dgo file not found"; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("DGO");
                    includeDGO();
                }
            }
            xhttp.open("GET", "/dist/dgo/" + file + ".dgo", true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}