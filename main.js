// helps
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
}