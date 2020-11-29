function reqListener() {
    function parseDLGM(dlgmText) {
        const dlg = dlgmText
            // badges
            .replace(/\[badge\((.*?)\)\((.*?)\)\((.*?)\)]/gim, "<img src='https://badgen.net/badge/$1/$2/$3'>")
            .replace(/\[x\]/gim, "<input type='checkbox' id='coding' name='interest' value='coding' checked disabled>")
            .replace(/\[ \]/gim, "<input type='checkbox' id='coding' name='interest' value='coding' disabled>")
            .replace(/\[download\((.*?)\)\((.*?)\)\]/gim, "<a class='btn2' href='$2'>$1</a>")



        return dlg.trim()
    }
    var input = document.getElementById('content');
    input.innerHTML = parseDLGM(marked(this.responseText));
}

var oReq = new XMLHttpRequest();
var param = getUrlParam('');
if (param === "") {
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/home.md", true);
    oReq.send();
} else {
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/" + param, true);
    oReq.send();
}

function getUrlParam(param) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?]" + param + "([^&#]*)");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}