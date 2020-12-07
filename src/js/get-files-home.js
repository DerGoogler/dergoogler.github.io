// varbs
var jsonfile = "https://pmr-cloud.firebaseio.com/web_server.json";
var doc = document;
var mainten = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><style>html, body { padding: 0; margin: 0; width: 100%; height: 100%; }* {box-sizing: border-box;}body { text-align: center; padding: 0; background: #d6433b; color: #fff; font-family: Open Sans; }h1 { font-size: 50px; font-weight: 100; text-align: center;}body { font-family: Open Sans; font-weight: 100; font-size: 20px; color: #fff; text-align: center; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}article { display: block; width: 700px; padding: 50px; margin: 0 auto; }a { color: #fff; font-weight: bold;}a:hover { text-decoration: none; }svg { width: 75px; margin-top: 1em; }</style><article><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 202.24 202.24\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Capa_1\" data-name=\"Capa 1\"><path class=\"cls-1\" d=\"M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z\"/><path class=\"cls-1\" d=\"M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z\"/></g></g></svg><h1>We&rsquo;ll be back soon!</h1><div><p>Sorry for the inconvenience. We&rsquo;re performing some maintenance at the moment. If you need to you can always follow us on <a href=\"http://t.me/LOST_LiGA\">Telegram</a> for updates!</p><p>&mdash; The DG Team</p></div></article>";


// some controllers
$(document).ready(function() {
    var xmlhttpp = new XMLHttpRequest();
    xmlhttpp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var web_server = JSON.parse(this.responseText);


            if (web_server.index.maintenance.active === false) {
                doc.title = web_server.index.maintenance.title;
                doc.getElementById('body').innerHTML = mainten;
            } else {
                function reqListener() {
                    function parseDLGM(dlgmText) {
                        const dlg = dlgmText
                            // main
                            .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>>")
                            .replace(/\[x\]/gim, "<i class='fa fa-check'>")
                            .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
                            .replace(/\[download\((.*?)\)\((.*?)\)\]/gim, "<button class='btn btn-1' onclick='window.open(\"$2\");'>$1</button>")
                            .replace(/\[title\((.*?)\)\]/gim, "<title id='md-title'>$1 - Der_Googler</title>")
                            .replace(/\[heads\((.*?)\)\]/gim, "<title id='hide-nav'>$1</title>")
                            .replace(/\[webpage\((.*?)\)\]/gim, "<title id='hide-page'>$1</title>")
                            .replace(/\[sp\]/gim, " ")
                            .replace(/\[alert\((.*?)\)\((.*?)\)\]/gim, "<em class='markdown-alert' onclick='alert(\"$1\");' title='$2'>$2</em>")
                            // [text-badge(Will Added Soon!)(green)(Pitch)]
                            .replace(/\[text-badge\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<span badge-text='$1' bg-color='$2'>$3</span>")
                            // [svg-badge(Build)(Android Studio)(272727)]
                            .replace(/\[svg-badge\((.*?)\)\((.*?)\)\]/gim, "<div class='badge-wrapper'><span class='badge-text-one'>$1</span><span class='badge-text-two'>$2</span></div>")
                            .replace(/\[app-card\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\((.*?)\)\]/gim, "<div class='app-card'><img class='app-card-img' src='/src/images/$4' style='width:100%'><div class='app-card-container'><h4><b><a href='$5'>$1</a></b></h4><p>$2</p><p>$3</p></div></div>")
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
                            // tests
                            .replace(/\<\!\-\-(.+)\-\-\>/gim, '$1')

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
                    xmlhttpp.open("GET", "/main/index.markdown", true);
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
            }
        }
    };
    xmlhttpp.open("GET", jsonfile, true);
    xmlhttpp.send();
});

$(document).ready(function() {
    $(document).bind('contextmenu', function(event) {
        $("#contextmenu").css({ "top": event.pageY + "px", "left": event.pageX + "px" }).show();
        event.preventDefault();
    });
    $(document).bind('click', function() {
        $("#contextmenu").hide();
    })
});