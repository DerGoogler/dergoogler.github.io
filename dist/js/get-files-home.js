function reqListener() {
    function parseDLGM(dlgmText) {
        const dlg = dlgmText
            .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>>")
            .replace(/\[x\]/gim, "<i class='fa fa-check'>")
            .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
            .replace(/\[download\((.*?)\)\((.*?)\)\]/gim, "<button class='btn btn-1' onclick='window.open(\"$2\");'>$1</button>")
            // [text-badge(Will Added Soon!)(green)(Pitch)]
            .replace(/\[text-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<span badge-text='$1' bg-color='$2'>$3</span>")
            // [svg-badge(Build)(Android Studio)(272727)]
            .replace(/\[svg-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<svg width='100%' height='20' viewBox='0 0 1333 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='$1 : $2'><g><rect fill='#555' width='100%' height='200'/><rect fill='#$3' x='413' width='100%' height='200'/></g><g aria-hidden='true' fill='#fff' text-anchor='start' font-family='Verdana,DejaVu Sans,sans-serif' font-size='110'><text x='60' y='148' textLength='313' fill='#000' opacity='0.1'>$1</text><text x='50' y='138' textLength='313'>$1</text><text x='468' y='148' textLength='820' fill='#000' opacity='0.1'>$2</text><text x='458' y='138' textLength='820'>$2</text></g></svg>")
            //
            .replace(/\[app-card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><img class='app-card-img' src='/dist/images/$4' style='width:100%'><div class='app-card-container'><h4><b><a href='$5'>$1</a></b></h4><p>$2</p><p>$3</p></div></div>")
            // fas
            .replace(/\[playstore\]/gim, "<i class='fab fa-google-play'></i>")
            .replace(/\[official\]/gim, "<i class='fas fa-certificate'></i>")
            .replace(/\[promo\]/gim, "<i class='fas fa-ad'></i>")
            .replace(/\[web\]/gim, "<i class='fas fa-globe-americas'></i>")
            .replace(/\[android\]/gim, "<i class='fab fa-android'></i>")
            //.replace(/\[title\((.*?)\)\]/gim, "<script>document.title = \"$1 \" + \" - Der_Googler\";</script>")




        return dlg.trim()
    }
    var input = document.getElementById('content');
    input.innerHTML = parseDLGM(marked(this.responseText));
}
var oReq = new XMLHttpRequest();
var param = getUrlParam('');
if (param === "") {
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/bei_gott_mobb_mich_nicht_github.markdown", true);
    oReq.send();
} else {
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/" + param + ".markdown", true);
    oReq.send();
}

function getUrlParam(param) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?]" + param + "/([^&#]*)/");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}