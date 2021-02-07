import { doc } from './doc';
import { param } from './param';
import { webload } from './webload';
import { log } from './log';
import { json } from './jsonFetch';
import { dgsm } from './dgsm';


let shareParam = param.get.custom('share', '-');
switch (shareParam) {
    case 'twitch':
        window.open('https://www.twitch.tv/realspax');
        break;
    case 'instagram':
        window.open('https://instagram.com/real.spax');
        break;
}

var xhttp = new XMLHttpRequest();
if (window.location.search === '') {
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            doc.set.HTML('ice', xhttp.responseText);
            webload.GamesResponse(json.games.get());
        }
    };
    xhttp.open("GET", 'contents/index.dgsHTML', true);
    xhttp.send();
} else {
    log.error('WebLoad will not loaded: No main page');
    var getting_url = param.get.custom('f', '.');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            doc.set.HTML('ice', xhttp.responseText);
        }
    };
    xhttp.open("GET", 'contents/' + getting_url + '.dgsHTML', true);
    xhttp.send();
}