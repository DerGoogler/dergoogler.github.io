// varbs
var doc = document;
var log = console;
var mainten = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><style>html, body { padding: 0; margin: 0; width: 100%; height: 100%; user-select: none;}* {box-sizing: border-box;}body { text-align: center; padding: 0; background: #d6433b; color: #fff; font-family: Open Sans; }h1 { font-size: 50px; font-weight: 100; text-align: center;}body { font-family: Open Sans; font-weight: 100; font-size: 20px; color: #fff; text-align: center; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center;}article { display: block; width: 700px; padding: 50px; margin: 0 auto; }a { color: #fff; font-weight: bold;}a:hover { text-decoration: none; }svg { width: 75px; margin-top: 1em; }</style><article><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 202.24 202.24\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 3</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Capa_1\" data-name=\"Capa 1\"><path class=\"cls-1\" d=\"M101.12,0A101.12,101.12,0,1,0,202.24,101.12,101.12,101.12,0,0,0,101.12,0ZM159,148.76H43.28a11.57,11.57,0,0,1-10-17.34L91.09,31.16a11.57,11.57,0,0,1,20.06,0L169,131.43a11.57,11.57,0,0,1-10,17.34Z\"/><path class=\"cls-1\" d=\"M101.12,36.93h0L43.27,137.21H159L101.13,36.94Zm0,88.7a7.71,7.71,0,1,1,7.71-7.71A7.71,7.71,0,0,1,101.12,125.63Zm7.71-50.13a7.56,7.56,0,0,1-.11,1.3l-3.8,22.49a3.86,3.86,0,0,1-7.61,0l-3.8-22.49a8,8,0,0,1-.11-1.3,7.71,7.71,0,1,1,15.43,0Z\"/></g></g></svg><h1>We&rsquo;ll be back soon!</h1><div><p>Sorry for the inconvenience. We&rsquo;re performing some maintenance at the moment. If you need to you can always follow us on <a href=\"http://t.me/dergoogler\">Telegram</a> for updates!</p><p>&mdash; The DG Team</p></div></article>";
var onlay_eventa = "<link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700\" rel=\"stylesheet\"><script type=\"text/javascript\" src=\"/src/js/fireworks.js\"></script><script type=\"text/javascript\" src=\"/src/js/snowflakes.js\"></script><style>html,body {padding: 0;margin: 0;position: absolut;width: 100%;height: 100%;cursor: default;user-select: none;}* {box-sizing: border-box;}body {text-align: center;padding: 0;background: linear-gradient(119.42deg, #332500, #000000 79.71%);background-repeat: no-repeat;color: #694c00;font-family: Open Sans;}h1 {font-size: 25px;font-weight: 100;text-align: center;}body {font-family: Open Sans;font-weight: 100;font-size: 20px;text-align: center;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}article {display: block;width: 700px;padding: 50px;margin: 0 auto;}a {color: #fff;font-weight: bold;}a:hover {text-decoration: none;}i{font-size:75px;}</style><article><h1><i class=\"fad fa-glass-cheers\"></i></h1><h1><em id=\"dgo-event\"></em></h1><div><p>A happy New Year! Enjoy the cooldown.</p><p>&mdash; The DG Team</p></div></article>";
var jsonfile = "https://pmr-cloud.firebaseio.com/web_server.json";
var event_string_text = "SILVESTER";

function docT(type, ID) {
    switch (type) {
        case id:
            document.getElementById(ID);
            break;
        case cl:
            document.getElementsByClassName(ID)
            break;
        default:
    }
}

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
        .replace(/\[fa-icon\((.*?)\)\]/gim, "<i class='fab fa-$1'></i>>")
        .replace(/\[x\]/gim, "<i class='fa fa-check'>")
        .replace(/\[ \]/gim, "<i class='fa fa-remove'>")
        .replace(/\{#button#\}*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=text\(\((.*?)\)\)*(\r\n|\r|\n)=link\(\((.*?)\)\)*(\r\n|\r|\n)\{#button#\}/gim, "<button type='button' class='btn btn-$2' onclick='window.open(\"https://$6\");'>$4</button>")
        //.replace(/\[modal\]*(\r\n|\r|\n)=id\((.*?)\)*(\r\n|\r|\n)=title\((.*?)\)*(\r\n|\r|\n)=content\((.*?)\)*(\r\n|\r|\n)=btn-text\((.*?)\)*(\r\n|\r|\n)\[\?modal\]*(\r\n|\r|\n)/gim, "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#$2'>$8</button><div class='modal fade' id='$2' tabindex='-1' aria-labelledby='$2Label' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='$2Label'>$4</h5><button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body'>$6</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button></div></div></div></div>")
        .replace(/\{#accordion-item#\}*(\r\n|\r|\n)=id\(\((.*?)\)\)*(\r\n|\r|\n)=title\(((.*?))\)*(\r\n|\r|\n)=content\(((.*?))\)*(\r\n|\r|\n)\{#accordion-item#\}/gim, "<div class='accordion-item'><h2 class='accordion-header' id='heading$2'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse$2' aria-expanded='true' aria-controls='collapse$2'>$4</button></h2><div id='collapse$2' class='accordion-collapse collapse' aria-labelledby='heading$2' data-bs-parent='#accordion$2'><div class='accordion-body'>$6</div></div></div>")
        .replace(/\{#gitmd#\}([\s\S]*?)\{#gitmd#\}/gim, "<article class='markdown-body'>$1</article>")
        .replace(/\{#btn-collapse#\}*(\r\n|\r|\n)=id\(\((.*?)\)\)*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=btn-text\(\((.*?)\)\)*(\r\n|\r|\n)=content-text\(\(([\s\S]*?)\)\)*(\r\n|\r|\n)\{#btn-collapse#\}/gim, "<button class='btn btn-$4' type='button' data-bs-toggle='collapse' data-bs-target='#collapse$2' aria-expanded='false' aria-controls='collapse$2'>$6</button></p><div class='collapse' id='collapse$2'><div class='card card-body'>$8</div></div>")
        // page settings
        .replace(/\{#setting#\}*(\r\n|\r|\n)=title\(\((.*?)\)\)*(\r\n|\r|\n)=header\(\((.*?)\)\)*(\r\n|\r|\n)\{#setting#\}/gim, "<title id='md-title'>$2 - Der_Googler</title><title id='hide-nav'>$4</title>")
        // end
        .replace(/\{#sp#\}/gim, " ")
        .replace(/\\b/gim, '<br>')
        .replace(/\[=margin\(\((.*?)\)\)\]/gim, '<div style="margin: $1px;"></div>')
        .replace(/\{#alert#\}*(\r\n|\r|\n)=title\(\((.*?)\)\)*(\r\n|\r|\n)=message\(\((.*?)\)\)*(\r\n|\r|\n)\{#alert#\}/gim, "<em class='markdown-alert' onclick='alert(\"$4\");' title='$2'>$2 (alert)</em>")
        // [text-badge(Will Added Soon!)(green)(Pitch)]
        .replace(/\:dot\:/gim, "\•")
        .replace(/\{#news-alert#\}*(\r\n|\r|\n)=class\(\((.*?)\)\)*(\r\n|\r|\n)=b-text\(\((.*?)\)\)*(\r\n|\r|\n)=n-text\(\((.*?)\)\)*(\r\n|\r|\n)\{#news-alert#\}/gim, "<div class='news_alert'><div class='alert alert-$2 alert-dismissible fade show' role='alert'><strong>$4 </strong>$6</div></div>")
        .replace(/\{#progressbar#\}*(\r\n|\r|\n)=color\(\((.*?)\)\)*(\r\n|\r|\n)=progress\(\((.*?)\)\)*(\r\n|\r|\n)\{#progressbar#\}/gim, "<div class='dgsm_progrssbar' style='margin:5px;'><div class='progress'><div class='progress-bar' role='progressbar' style='width: $4%;background-color: #$2;' aria-valuenow='$1' aria-valuemin='0' aria-valuemax='100'>$4%</div></div></div>")
        .replace(/\{#video\(\((.*?)\)\)#\}/gim, "<video width='50%' style='border-radius:10px;outline:none;' controls controlsList='nodownload' class='myvideo'><source src='https://$1' type='video/mp4'>Your browser does not support the video tag.</video>")
        .replace(/\{#card#\}*(\r\n|\r|\n)=title\(\((.*?)\)\)*(\r\n|\r|\n)=description\(\((.*?)\)\)*(\r\n|\r|\n)=btn-text\(\((.*?)\)\)*(\r\n|\r|\n)=link\(\((.*?)\)\)*(\r\n|\r|\n)\{#card#\}/gim, "<div class='card'><div class='card-body'><h5 class='card-title'>$2</h5><p class='card-text'>$4</p><a href='https://$8' class='btn btn-primary'>$6</a></div></div>")
        // tests
        .replace(/\<\!\-\-(.+)\-\-\>/gim, '$1')
        .replace(/[\/]{3}(.+)/g, '\<\!\-\- $1 \-\-\>')
        .replace(/[\?]{3}/g, '')

    return dlg.trim()
}

if (window.location.pathname === "/editor/") {
    function editor_paeser() {
        var xhuj = doc.getElementById('dgsm_input').textContent;
        var fdsjkhfg = doc.getElementById('entred_letters');
        doc.getElementById('dgsm_output_ful').innerHTML = parseDLGM(marked( /*escapeHtml(*/ xhuj)) /*)*/ ;
        fdsjkhfg.innerHTML = "Entered letters: " + xhuj.length;

        const editor = document.getElementById('dgsm_input');
        const selectionOutput = document.getElementById('selection');

        function getTextSegments(element) {
            const textSegments = [];
            Array.from(element.childNodes).forEach((node) => {
                switch (node.nodeType) {
                    case Node.TEXT_NODE:
                        textSegments.push({ text: node.nodeValue, node });
                        break;

                    case Node.ELEMENT_NODE:
                        textSegments.splice(textSegments.length, 0, ...(getTextSegments(node)));
                        break;

                    default:
                        throw new Error(`Unexpected node type: ${node.nodeType}`);
                }
            });
            return textSegments;
        }

        editor.addEventListener('input', updateEditor);

        function updateEditor() {
            const sel = window.getSelection();
            const textSegments = getTextSegments(editor);
            const textContent = textSegments.map(({ text }) => text).join('');
            let anchorIndex = null;
            let focusIndex = null;
            let currentIndex = 0;
            textSegments.forEach(({ text, node }) => {
                if (node === sel.anchorNode) {
                    anchorIndex = currentIndex + sel.anchorOffset;
                }
                if (node === sel.focusNode) {
                    focusIndex = currentIndex + sel.focusOffset;
                }
                currentIndex += text.length;
            });

            editor.innerHTML = renderText(escapeHtml(textContent));

            restoreSelection(anchorIndex, focusIndex);

        }

        function restoreSelection(absoluteAnchorIndex, absoluteFocusIndex) {
            const sel = window.getSelection();
            const textSegments = getTextSegments(editor);
            let anchorNode = editor;
            let anchorIndex = 0;
            let focusNode = editor;
            let focusIndex = 0;
            let currentIndex = 0;
            textSegments.forEach(({ text, node }) => {
                const startIndexOfNode = currentIndex;
                const endIndexOfNode = startIndexOfNode + text.length;
                if (startIndexOfNode <= absoluteAnchorIndex && absoluteAnchorIndex <= endIndexOfNode) {
                    anchorNode = node;
                    anchorIndex = absoluteAnchorIndex - startIndexOfNode;
                }
                if (startIndexOfNode <= absoluteFocusIndex && absoluteFocusIndex <= endIndexOfNode) {
                    focusNode = node;
                    focusIndex = absoluteFocusIndex - startIndexOfNode;
                }
                currentIndex += text.length;
            });

            sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex);
        }

        function renderText(text) {
            const output = text
                // dgsm basics
                .replace(/\[(.*?)\]\((.*?)\)/gim, "<span class='dgsm_high_link_text'>[$1]</span><span class='dgsm_high_link'>($2)</span>")
                .replace(/\{#(.*?)#\}([\s\S]*?)\{#(.*?)#\}/gim, "<span class='dgsm_high_dgsm_start'>{#</span><span class='dgsm_high_dgsm_start_inner'>$1</span><span class='dgsm_high_dgsm_start'>#}</span>$2<span class='dgsm_high_dgsm_start'>{#</span><span class='dgsm_high_dgsm_start_inner'>$3</span><span class='dgsm_high_dgsm_start'>#}</span>")
                .replace(/\\n/gim, "<span class='dgsm_high_line_break'>\\n</span>")
                .replace(/\\b/gim, "<span class='dgsm_high_line_break'>\\b</span>")
                .replace(/[\/]{3}(.+)/gim, "<span class='dgsm_high_comment'>///$1</span>")
                .replace(/[\#]{1}(.+)/gim, "<span class='dgsm_high_hr_header'>#$1</span>")
                .replace(/[\#]{2}(.+)/gim, "<span class='dgsm_high_hr_header'>##$1</span>")
                .replace(/[\#]{3}(.+)/gim, "<span class='dgsm_high_hr_header'>###$1</span>")
                .replace(/[\#]{4}(.+)/gim, "<span class='dgsm_high_hr_header'>####$1</span>")
                .replace(/[\#]{5}(.+)/gim, "<span class='dgsm_high_hr_header'>#####$1</span>")
                .replace(/[\#]{6}(.+)/gim, "<span class='dgsm_high_hr_header'>######$1</span>")
                .replace(/\=(.*?)\(\((.*?)\)\)/gim, "<span class='dgsm_high_equalll'>=$1</span><span class='dgsm_high_string'>(($2))</span>")
                .replace(/\`(.*?)\`/gim, "<span class='dgsm_high_note'>`$1`</span>")
                // html basics
                .replace(/&lt;(.*?)&gt;/gim, "<span class='dgsm_high_left_right'>&lt</span><span class='dgsm_high_left_right_inner'>$1</span><span class='dgsm_high_left_right'>&gt;</span>")
                .replace(/&lt;\/(.*?)&gt;/gim, "<span class='dgsm_high_left_right'>/&lt</span><span class='dgsm_high_left_right_inner'>$1</span><span class='dgsm_high_left_right'>&gt;</span>")

            return output.trim()
        }

        updateEditor();
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
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            dgsm_repo_input.innerHTML = escapeHtml(this.responseText);
                            editor_paeser();
                        }
                        if (this.status == 404) {
                            dgsm_repo_input.innerHTML = "# ERROR 404\nThe page \" " + save_file_as + " \" was nor found on the internet.\n**Try an other link**";
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
                alert('');
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
    // some controllers
    $(document).ready(function() {
        var xmlhttpp = new XMLHttpRequest();
        xmlhttpp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var web_server = JSON.parse(this.responseText);

                /*
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

                        if (web_server.index.event.event_only === true) {
                            // Display the result in the element
                            document.getElementById("dgo-event").innerHTML = "<b>" + event_string_text + " IN:" + "<br>" + days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s " + "</b>";
                        } else {
                            // Display the result in the element
                            document.getElementById("dgo-event").innerHTML = "<b>" + event_string_text + " IN: " + "</b>" + days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                        }
                        // If the count down is finished, write some text
                        if (distance < 0) {
                            clearInterval(x);
                            document.getElementById("dgo-event").innerHTML = "<b>" + "2020 IS OVER!" + "</b>";
                        }
                    }, 1000);
                }
                */

                if (web_server.index.maintenance.active === false) {
                    doc.title = web_server.index.maintenance.title;
                    doc.getElementById('body').innerHTML = mainten;
                } else {
                    function reqListener() {
                        var input = document.getElementById('content');
                        input.innerHTML = parseDLGM(marked(this.responseText));
                        var text = document.getElementById('md-title').textContent;
                        document.title = text;
                        var hideNAV = document.getElementById('hide-nav').textContent;
                        if (hideNAV === "false") {
                            document.getElementById('web-header').style.display = 'none';
                            document.getElementById('web-footer').style.display = 'none';
                        }
                        return;
                    }

                    var xmlhttpp = new XMLHttpRequest();
                    var xmlhttpp_pmr = new XMLHttpRequest();
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
                        if (param_pmr === "" || param2_pmr === ("")) {
                            xmlhttpp_pmr.addEventListener("load", reqListener);
                            xmlhttpp_pmr.open("GET", "/blog/start-with-pmr-cloud.markdown", true);
                            xmlhttpp_pmr.send();
                        } else {
                            xmlhttpp_pmr.addEventListener("load", reqListener);
                            xmlhttpp_pmr.open("GET", "https://raw.githubusercontent.com/" + param2_pmr + ".dgsm", true);
                            xmlhttpp_pmr.send();
                        }
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
                        var regex = new RegExp("[??]" + param + "/([^&#]*)/");
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
                    // dlgowe_event();

                }
            }
        };
        xmlhttpp.open("GET", jsonfile, true);
        xmlhttpp.send();
    });
}