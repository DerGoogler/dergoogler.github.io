function reqListener() {
    function parseDLGM(dlgmText) {
        const dlg = dlgmText
            //.replace(/[^\n]/gim, "")
            .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>>")
            .replace(/\[x\]/gim, "<i class='fa fa-check'>")
            .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
            .replace(/\[download\((.*?)\)\((.*?)\)\]/gim, "<button class='btn btn-1' onclick='window.open(\"$2\");'>$1</button>")
            .replace(/\[title\((.*?)\)\]/gim, "<title id='md-title'>$1 - Der_Googler</title>")
            .replace(/\[heads\((.*?)\)\]/gim, "<title id='hide-nav'>$1</title>")
            .replace(/\[webpage\((.*?)\)\]/gim, "<title id='hide-page'>$1</title>")
            // [text-badge(Will Added Soon!)(green)(Pitch)]
            .replace(/\[text-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<span badge-text='$1' bg-color='$2'>$3</span>")
            // [svg-badge(Build)(Android Studio)(272727)]
            .replace(/\[svg-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<svg width='100%' height='20' viewBox='0 0 1333 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='$1 : $2'><g><rect fill='#555' width='100%' height='200'/><rect fill='#$3' x='413' width='100%' height='200'/></g><g aria-hidden='true' fill='#fff' text-anchor='start' font-family='Verdana,DejaVu Sans,sans-serif' font-size='110'><text x='60' y='148' textLength='313' fill='#000' opacity='0.1'>$1</text><text x='50' y='138' textLength='313'>$1</text><text x='468' y='148' textLength='820' fill='#000' opacity='0.1'>$2</text><text x='458' y='138' textLength='820'>$2</text></g></svg>")
            .replace(/\[app-card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><img class='app-card-img' src='/dist/images/$4' style='width:100%'><div class='app-card-container'><h4><b><a href='$5'>$1</a></b></h4><p>$2</p><p>$3</p></div></div>")
            .replace(/\[card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><div class='app-card-container'><h4><b><a href='$4'>$1</a></b></h4><p>$2</p><p><em>$3</em></p></div></div>")
            // fas
            .replace(/\[playstore\]/gim, "<i class='fab fa-google-play'></i>")
            .replace(/\[official\]/gim, "<i class='fal fa-badge-check'></i>")
            .replace(/\[promo\]/gim, "<i class='fal fa-ad'></i>")
            .replace(/\[web\]/gim, "<i class='fad fa-globe-americas'></i>")
            .replace(/\[android\]/gim, "<i class='fab fa-android'></i>")
            .replace(/\[app\]/gim, "<i class='fal fa-mobile-android-alt'></i>")
            .replace(/\[blog\]/gim, "<i class='fal fa-blog'></i>")
            .replace(/\[safty\]/gim, "<i class='fal fa-user-shield'></i>")
            .replace(/\[changelog\]/gim, "<i class='fal fa-file-invoice'></i>")
            .replace(/\[halloween\]/gim, "<i class='fal fa-jack-o-lantern'></i>")
            .replace(/\[xmas\]/gim, "<i class='fal fa-gifts'></i>")
            .replace(/\[easter\]/gim, "<i class='fal fa-file-egg'></i>")
            .replace(/\[others\]/gim, "<i class='fal fa-bullseye'></i>")
            .replace(/\[team\]/gim, "<i class='fal fa-user-friends'></i>")
            //
            .replace(/\[sp\]/gim, " ")
            .replace(/\[alert\((.*?)\)\((.*?)\)\]/gim, "<em class='markdown-alert' onclick='alert(\"$1\");' title='$2'>$2</em>")
            .replace(/\[g\]\n\((.*)\)\n\[g\]/gim, '<em>$1</em>')
            /*
            .replace(/\[!head\]/gim, "<template>")

            */
        return dlg.trim()
    }
    var input = document.getElementById('content');
    input.innerHTML = parseDLGM(marked(this.responseText));
    var text = document.getElementById('md-title').textContent;
    document.title = text;
    var hideNAV = document.getElementById('hide-nav').textContent;
    var hideNAV2 = document.getElementById('hide-page').textContent;
    if (hideNAV === "true") {
        document.getElementById('web-header').style.display = 'none';
        document.getElementById('web-footer').style.display = 'none';
    }
    if (hideNAV2 === "true") {
        document.getElementById('web-body').style.cssText = "box-sizing: border-box;min-width: 100%;max-width: 100%;margin: 0px;margin-top: 0px;padding: 0px;";
    }
}

var xmlhttpp = new XMLHttpRequest();
var param = getUrlParam('');
var param2 = getUrlParam2('');

if (param === "blog") {
    document.title = "Blog - Der_Googler";
} else if (param === "apps") {
    document.title = "Apps - Der_Googler";
} else if (param === "safty") {
    document.title = "Safty - Der_Googler";
} else if (param === "changelogs") {
    document.title = "Changelogs - Der_Googler";
}

if (param === "") {
    xmlhttpp.addEventListener("load", reqListener);
    xmlhttpp.open("GET", "bei_gott_mobb_mich_nicht_github.markdown", true);
    xmlhttpp.send();
} else {
    xmlhttpp.addEventListener("load", reqListener);
    xmlhttpp.open("GET", param + "/" + param2 + ".markdown", true);
    xmlhttpp.send();
}

function getUrlParam(param) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?]" + param + "/([^&#]*)/");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}

function getUrlParam2(param) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[#]" + param + "/([^&#]*)/");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}

$(document).ready(function() {
    $(document).bind('contextmenu', function(event) {
        $("#contextmenu").css({ "top": event.pageY + "px", "left": event.pageX + "px" }).show();
        event.preventDefault();
    });
    $(document).bind('click', function() {
        $("#contextmenu").hide();
    })
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("dgo-event").innerHTML = "<b>" + "XMAS IN:" + "</b> " + days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dgo-event").innerHTML = "XMAS IS EXPIRED";
    }
}, 1000);

/*
function includeDGO() {
    var z, i, elmnt, file, xhttp;
    // Loop through a collection of all HTML elements: 
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // search for elements with a certain atrribute:
        file = elmnt.getAttribute("dgo");
        if (file) {

            // Make an HTTP request using the attribute value as the file name: 
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "*.dgo file not found"; }
                    // Remove the attribute, and call this function once more:
                    elmnt.removeAttribute("DGO");
                    includeDGO();
                }
            }
            xhttp.open("GET", "/dist/dgo/" + file + ".dgo", true);
            xhttp.send();
            // Exit the function: 
            return;
        }
    }
} */