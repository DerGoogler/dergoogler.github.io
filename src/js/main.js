// varbs
var html34564 = "<!DOCTYPE html><html lang=\"en-US\"><head><meta name=\"description\" content=\"The official DGSM Editor! If you use PMR-Cloud will this tool help you so much!\"><meta property=\"og:type\" content=\"website\"><meta property=\"og:url\" content=\"https://dergoogler.github.io/editor/\"><meta property=\"og:title\" content=\"DGSM Editor - Der_Googler\"><meta property=\"og:description\" content=\"The official DGSM Editor! If you use PMR-Cloud will this tool help you so much!\"><meta property=\"og:image\" content=\"https://dergoogler.github.io/src/images/googler.900.jpg\"><meta property=\"twitter:card\" content=\"summary_large_image\"><meta property=\"twitter:url\" content=\"https://dergoogler.github.io/editor/\"><meta property=\"twitter:title\" content=\"DGSM Editor - Der_Googler\"><meta property=\"twitter:description\" content=\"The official DGSM Editor! If you use PMR-Cloud will this tool help you so much!\"><meta property=\"twitter:image\" content=\"https://dergoogler.github.io/src/images/googler.900.jpg\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/src/images/pmr-cloud.png\" /><link rel=\"stylesheet\" type=\"text/css\" href=\"/src/fw/css/all.css\"><link rel=\"stylesheet/less\" type=\"text/css\" href=\"/src/css/md.less\"><link rel=\"stylesheet/less\" type=\"text/css\" href=\"/src/css/md4.less\"><style>.markdown-body {box-sizing: border-box;min-width: 200px;max-width: 980px;margin: 0 auto;padding: 45px;}@media (max-width: 767px){.markdown-body{padding: 15px;}}</style><script src=\"https://cdn.jsdelivr.net/npm/less\"><script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script></script><script src=\"/src/js/main.js\"></script><script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall@latest/dist/pwa-install.min.js\"></script></head><body>";
var html3456345 = "<script>includeHTML();</script><script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW\" crossorigin=\"anonymous\"></script></body></html>";
var doc = document;
var log = console;
var onlay_eventa = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><script type=\"text/javascript\" src=\"/src/js/fireworks.js\"></script><script type=\"text/javascript\" src=\"/src/js/snowflakes.js\"></script><style>html,body {padding: 0;margin: 0;position: absolut;width: 100%;height: 100%;cursor: default;user-select: none;}* {box-sizing: border-box;}body {text-align: center;padding: 0;background: linear-gradient(119.42deg, #332500, #000000 79.71%);background-repeat: no-repeat;color: #694c00;font-family: Open Sans;}h1 {font-size: 25px;font-weight: 100;text-align: center;}body {font-family: Open Sans;font-weight: 100;font-size: 20px;text-align: center;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}article {display: block;width: 700px;padding: 50px;margin: 0 auto;}a {color: #fff;font-weight: bold;}a:hover {text-decoration: none;}i{font-size:75px;}</style><article><h1><i class=\"fad fa-glass-cheers\"></i></h1><h1><em id=\"dgo-event\"></em></h1><div><p>A happy New Year! Enjoy the cooldown.</p><p>&mdash; The DG Team</p></div></article>";
var jsonfile = "https://pmr-cloud.firebaseio.com/web_server.json";
var event_string_text = "SILVESTER";

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-file");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "File not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("include-file");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function parseDLGM(dlgmText) {
    const dlg = dlgmText
        // main
        .replace(/\<script\>([\s\S]*?)\<script\>/gim, "<script>$1</script>")
        .replace(/\<page\>([\s\S]*?)\<page\>/gim, "<div>$1</div>")
        .replace(/\<style\>([\s\S]*?)\<style\>/gim, "<style>$1</style>")
        .replace(/\<a (.*?)\>([\s\S]*?)\<\/a\>/gim, "<a $1 target='_blank'>$2</a>")
        .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>")
        .replace(/\[x\]/gim, "<i class='fa fa-check'>")
        .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
        .replace(/\{#button#\}*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=text\(\((.*?)\)\)*(\r\n|\r|\n)=link\(\((.*?)\)\)*(\r\n|\r|\n)\{#button#\}/gim, "<button type='button' class='btn btn-$2' onclick='window.open(\"https://$6\");'>$4</button>")
        //.replace(/\[modal\]*(\r\n|\r|\n)=id\((.*?)\)*(\r\n|\r|\n)=title\((.*?)\)*(\r\n|\r|\n)=content\((.*?)\)*(\r\n|\r|\n)=btn-text\((.*?)\)*(\r\n|\r|\n)\[\?modal\]*(\r\n|\r|\n)/gim, "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#$2'>$8</button><div class='modal fade' id='$2' tabindex='-1' aria-labelledby='$2Label' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='$2Label'>$4</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'>$6</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button></div></div></div></div>")
        .replace(/\{#accordion-item#\}*(\r\n|\r|\n)=id\(\((.*?)\)\)*(\r\n|\r|\n)=title\(((.*?))\)*(\r\n|\r|\n)=content\(((.*?))\)*(\r\n|\r|\n)\{#accordion-item#\}/gim, "<div class='accordion-item'><h2 class='accordion-header' id='heading$2'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse$2' aria-expanded='true' aria-controls='collapse$2'>$4</button></h2><div id='collapse$2' class='accordion-collapse collapse' aria-labelledby='heading$2' data-bs-parent='#accordion$2'><div class='accordion-body'>$6</div></div></div>")
        .replace(/\{#gitmd#\}([\s\S]*?)\{#gitmd#\}/gim, "<article class='markdown-body'>$1</article>")
        .replace(/\{#navbar-body#\}([\s\S]*?)\{#navbar-body#\}/gim, "<template id='dgsm-nav-content'>$1</template>")
        .replace(/\{#btn-collapse#\}*(\r\n|\r|\n)=id\(\((.*?)\)\)*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=btn-text\(\((.*?)\)\)*(\r\n|\r|\n)=content-text\(\(([\s\S]*?)\)\)*(\r\n|\r|\n)\{#btn-collapse#\}/gim, "<button class='btn btn-$4' type='button' data-bs-toggle='collapse' data-bs-target='#collapse$2' aria-expanded='false' aria-controls='collapse$2'>$6</button></p><div class='collapse' id='collapse$2'><div class='card card-body'>$8</div></div>")
        .replace(/\{#sp#\}/gim, " ")
        .replace(/\\b/gim, '<br>')
        .replace(/\[=margin\(\((.*?)\)\)\]/gim, '<div style="margin: $1px;"></div>')
        .replace(/\{#=include\(\((.*?)\)\)#\}/gim, '<p include-file="$1.em.dgsm"></p>')
        .replace(/<alert([\s\S]*?)title="(.*?)"([\s\S]*?)>(.*?)<alert>/gim, "<em class='markdown-alert' onclick='alert(\"$4\");' title='$2'>$2 (alert)</em>")
        // [text-badge(Will Added Soon!)(green)(Pitch)]
        .replace(/\:dot\:/gim, "\•")
        .replace(/\:slight_smile\:/gim, "<img style=\"-o-object-fit:contain;object-fit:contain;width:1.375em;height:1.375em;vertical-align:bottom\" src=\"https://discord.com/assets/da3651e59d6006dfa5fa07ec3102d1f3.svg\">")
        .replace(/\{#news-alert#\}*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=b-text\(\((.*?)\)\)*(\r\n|\r|\n)=n-text\(\((.*?)\)\)*(\r\n|\r|\n)\{#news-alert#\}/gim, "<div class='news_alert'><div class='alert alert-$2 alert-dismissible fade show' role='alert'><strong>$4 </strong>$6</div></div>")
        .replace(/\{#progressbar#\}*(\r\n|\r|\n)=color\(\((.*?)\)\)*(\r\n|\r|\n)=progress\(\((.*?)\)\)*(\r\n|\r|\n)\{#progressbar#\}/gim, "<div class='dgsm_progrssbar' style='margin:5px;'><div class='progress'><div class='progress-bar' role='progressbar' style='width: $4%;background-color: #$2;' aria-valuenow='$1' aria-valuemin='0' aria-valuemax='100'>$4%</div></div></div>")
        .replace(/\{#video\(\((.*?)\)\)#\}/gim, "<video width='50%' style='border-radius:10px;outline:none;' controls controlsList='nodownload' class='myvideo'><source src='https://$1' type='video/mp4'>Your browser does not support the video tag.</video>")
        .replace(/\{#card#\}*(\r\n|\r|\n)=title\(\((.*?)\)\)*(\r\n|\r|\n)=description\(\((.*?)\)\)*(\r\n|\r|\n)=btn-text\(\((.*?)\)\)*(\r\n|\r|\n)=link\(\((.*?)\)\)*(\r\n|\r|\n)\{#card#\}/gim, "<div class='card'><div class='card-body'><h5 class='card-title'>$2</h5><p class='card-text'>$4</p><a href='https://$8' target='_blank' class='btn btn-primary'>$6</a></div></div>")
        // tests
        .replace(/\<\!\-\-(.+)\-\-\>/gim, '$1')
        .replace(/[\/]{3}([\s\S]*?)/g, '\<\!\-\- $1 \-\-\>')
        .replace(/[\/]{3}(.+)/g, '\<\!\-\- $1 \-\-\>')
        .replace(/[\?]{3}/g, '')

    return dlg.trim()
}

if (window.location.pathname === "/editor/") {

    function editor_paeser() {
        var xhuj = doc.getElementById('dgsm_input').value;
        var dgsm_output = document.getElementById('dgsm_output').contentWindow.document;
        dgsm_output.open();
        dgsm_output.write(html34564 + parseDLGM(marked(xhuj)) + html3456345);
        dgsm_output.close();
        var fdsjkhfg = doc.getElementById('entred_letters');
        fdsjkhfg.innerHTML = "Entered letters: " + xhuj.length;
    }

    function preview_code() {
        var xhuj48545 = doc.getElementById('dgsm_input').value;
        var myWindow = window.open('', 'myWindow', 'location=yes,height=2000,width=1000,scrollbars=0,status=yes,toolbar=0');
        myWindow.document.write(html34564 + '<textarea class="form-control" id="dgsm_input" rows="3"style="display:inline-block;white-space: pre-wrap; height: 500px;overflow-y: scroll;overflow-x: hidden;resize: none;" spellcheck="false" readonly>' + parseDLGM(marked(xhuj48545)) + '</textarea>' + html3456345);
    }

    function preview() {
        var xhuj485645 = doc.getElementById('dgsm_input').value;
        var myWindow = window.open('', 'myWindow', 'location=yes,height=2000,width=1000,scrollbars=0,status=yes,toolbar=0');
        myWindow.document.write(html34564 + parseDLGM(marked(xhuj485645)) + html3456345);
    }

    function get_source_from_url() {
        var save_file_as = prompt("Please enter a uurl:", "");
        var dgsm_repo_input = doc.getElementById('dgsm_input');
        if (save_file_as === "") {
            alert('You cannot get an empty file');
        } else if (save_file_as.includes("https://")) {
            if (save_file_as.includes('.md') || save_file_as.includes('.markdown') || save_file_as.includes('.dgsm')) {
                var xmlhttpp_editor = new XMLHttpRequest();
                xmlhttpp_editor.onreadystatechange = function() {
                    var dgsm_output11 = document.getElementById('dgsm_output').contentWindow.document;
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            dgsm_output11.open();
                            dgsm_output11.write(html34564 + parseDLGM(marked(this.responseText)) + html3456345);
                            dgsm_output11.close();
                            editor_paeser();
                        }
                        if (this.status == 404) {
                            dgsm_output11.open();
                            dgsm_output11.write(html34564 + parseDLGM(marked('{#=include((/embeds/404))#}')) + html3456345);
                            dgsm_output11.close();
                            editor_paeser();
                        }
                    }
                }
                xmlhttpp_editor.open("GET", save_file_as, true);
                xmlhttpp_editor.send();
            } else {
                alert('We allow only *.md *.markdown and *.dgsm');
            }
        } else {
            alert('Plese use the https:// format');
        }
    }

    function load() {
        var save_file_as = prompt("Please enter a name:", "content");
        if (save_file_as != null && save_file_as != "") {
            doc.getElementById('dgsm_input').innerHTML = atob(getCookie("dgsm_" + save_file_as));
            editor_paeser();
        } else {
            alert('Plese enter a name')
        }
    }

    function save() {
        var save_file_as = prompt("Please enter a name:", "content");
        if (save_file_as != null && save_file_as != "") {
            var xhuj2 = doc.getElementById('dgsm_input').value;
            setCookie('dgsm_' + save_file_as, `` + btoa(unescape(encodeURIComponent(xhuj2))) + ``, 3000000000000);
        } else {
            alert('Plese enter a name')
        }
    }

    function download_as_file_code() {
        var save_file_as = prompt("Please enter a file name:", "MyContent");
        if (save_file_as != null && save_file_as != "") {
            var xhuj2 = doc.getElementById('dgsm_input').value;
            download(save_file_as + ".dgsm.md", xhuj2);
        } else {
            alert('Plese enter a name')
        }
    }

    function changelogs(version) {
        switch (version) {
            case "v1.0":
                alert('Update and release of v1.0\n\n**Added**\n- Load, Saving and Download\n- Tools to generate a table\n- Live highlight syntax\n\n**Supports**\n- All Compos are available in the Editor\n\n**Others**\n- Site works with Bootstrap 5.0 Beta 1\n- Updated DGSM to v2');
                break;
            case "v1.1":
                alert('Update and release of v1.1\n\n**Fixes and Adds**\n- Editer preview is better (beta)');
                break;
            default:
                // code block
        }
    }

    window.onbeforeunload = function(e) {
        var dialogText = 'Are you realy sure you want to leave?';
        e.returnValue = dialogText;
        return dialogText;
    };
} else {


    function dlgowe_event() {
        // Set the date we're counting down to
        var countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();

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
            // Display the result in the element
            document.getElementById("dgo-event").innerHTML = "<b>" + days + "d " + hours + "h " +
                minutes + "m " + seconds + "s " + "</b>";
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("dgo-event").innerHTML = "<b>" + "2020 IS OVER!" + "</b>";
            }
        }, 1000);
    }

    function getUrlParam_base64(param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?]" + param + "=([^&#]*)");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }

    function reqListener() {
        var param_base64 = getUrlParam_base64('code');
        //var input = document.getElementById('content');
        var dgsm_input = document.getElementById('content').contentWindow.document;
        if (param_base64 === "") {
            dgsm_input.open();
            dgsm_input.write(html34564 + parseDLGM(marked(this.responseText)) + html3456345);
            dgsm_input.close();
        } else {
            dgsm_input.open();
            dgsm_input.write(html34564 + parseDLGM(marked(unescape(encodeURIComponent(atob(param_base64))))) + html3456345);
            dgsm_input.close();
        }
        includeHTML();
    }


    var xmlhttpp = new XMLHttpRequest();
    var xmlhttpp_pmr = new XMLHttpRequest();
    var xmlhttpp_base64 = new XMLHttpRequest();
    var param = getUrlParam('');
    var param2 = getUrlParam2('');
    var param_pmr = getUrlParam_pmr('');
    var param2_pmr = getUrlParam2_pmr('');

    if (param === "blog") {
        document.title = "Blog - Der_Googler";
    } else if (param === "apps") {
        document.title = "Apps - Der_Googler";
    } else if (param === "safty") {
        document.title = "Safty - Der_Googler";
    } else if (param === "changelogs") {
        document.title = "Changelogs - Der_Googler";
    } else if (param === "pmr") {
        document.title = "PMR-Cloud - Der_Googler";
    }

    if (param_pmr === "pmr") {
        var xmlhttp44 = new XMLHttpRequest();
        xmlhttp44.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const users = JSON.parse(this.responseText);
                users.map(({ id, reason }) => {
                    var banneduser = `#/${id}/`;
                    if (window.location.hash.includes(banneduser)) {
                        $(document).ready(function() {
                            document.title = [id] + " is banned";
                            document.getElementById('body').innerHTML = `<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><style>html, body { padding: 0; margin: 0; width: 100%; height: 100%; user-select: none;}* {box-sizing: border-box;}body { text-align: center; padding: 0; background: #d6433b; color: #fff; font-family: Open Sans; }h1 { font-size: 50px; font-weight: 100; text-align: center;}body { font-family: Open Sans; font-weight: 100; font-size: 20px; color: #fff; text-align: center; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}article { display: block; width: 700px; padding: 50px; margin: 0 auto; }a { color: #fff; font-weight: bold;}a:hover { text-decoration: none; }svg { width: 75px; margin-top: 1em; }</style><article><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 202.24 202.24\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Capa_1\" data-name=\"Capa 1\"><path class=\"cls-1\" d=\"M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z\"/><path class=\"cls-1\" d=\"M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z\"/></g></g></svg><h1>${id} is banned</h1><div><p>THIS USER HAS BEEN BY PAGE BANNED<br><b>Reason: </b>${reason}<br></p><p>&mdash; The DG Team</p></div></article>`;
                        });
                    } else if (param_pmr === "" || param2_pmr === "") {
                        xmlhttpp_pmr.addEventListener("load", reqListener);
                        xmlhttpp_pmr.open("GET", "/blog/start-with-pmr-cloud.markdown", true);
                        xmlhttpp_pmr.send();
                    } else {
                        xmlhttpp_pmr.addEventListener("load", reqListener);
                        xmlhttpp_pmr.open("GET", "https://raw.githubusercontent.com/" + param2_pmr + ".dgsm", true);
                        xmlhttpp_pmr.send();
                    }

                });
            }
        };
        xmlhttp44.open("GET", "https://pmr-cloud.firebaseio.com/users.json", true);
        xmlhttp44.send();
    } else {
        if (param === "") {
            xmlhttpp.addEventListener("load", reqListener);
            xmlhttpp.open("GET", "/main/index.markdown", true);
            xmlhttpp.send();
        } else {
            xmlhttpp.addEventListener("load", reqListener);
            xmlhttpp.open("GET", param + "/" + param2 + ".markdown", true);
            xmlhttpp.send();
        }
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

    function getUrlParam_pmr(param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?]" + param + "/([^&#]*)/");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }

    function getUrlParam2_pmr(param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[#]" + param + "/([^&#]*)/");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    }
}