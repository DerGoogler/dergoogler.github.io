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
            .replace(/\[app-card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><img class='app-card-img' src='/dist/images/$4' style='width:100%'><div class='app-card-container'><h4><b><a href='$5'>$1</a></b></h4><p>$2</p><p>$3</p></div></div>")
            .replace(/\[card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><div class='app-card-container'><h4><b><a href='$4'>$1</a></b></h4><p>$2</p><p><em>$3</em></p></div></div>")
            // fas
            .replace(/\[playstore\]/gim, "<i class='fab fa-google-play'></i>")
            .replace(/\[official\]/gim, "<i class='fad fa-certificate'></i>")
            .replace(/\[promo\]/gim, "<i class='fad fa-ad'></i>")
            .replace(/\[web\]/gim, "<i class='fas fa-globe-americas'></i>")
            .replace(/\[android\]/gim, "<i class='fab fa-android'></i>")
            .replace(/\[app\]/gim, "<i class='fad fa-mobile-android-alt'></i>")
            .replace(/\[blog\]/gim, "<i class='fad fa-blog'></i>")
            .replace(/\[safty\]/gim, "<i class='fad fa-user-shield'></i>")
            .replace(/\[changelog\]/gim, "<i class='fad fa-file-invoice'></i>")
            .replace(/\[halloween\]/gim, "<i class='fad fa-jack-o-lantern'></i>")
            .replace(/\[xmas\]/gim, "<i class='fad fa-gifts'></i>")
            .replace(/\[easter\]/gim, "<i class='fad fa-file-egg'></i>")

        return dlg.trim()
    }
    var input = document.getElementById('content');

    input.innerHTML = parseDLGM(marked(this.responseText));
    var text = document.getElementById('md-title').textContent;
    document.title = text;
}
var xmlhttpp = new XMLHttpRequest();
var param = getUrlParam('');



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
    var regex = new RegExp("[&]" + param + "/([^&#]*)/");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}


/*
// coldown leleleleleleelele
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
    document.getElementById("dgo-event").innerHTML = "XMAS in: " + days + " : " + hours + " : " +
        minutes + " : " + seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dgo-event").innerHTML = "XMAS IS EXPIRED";
    }
}, 1000);*/