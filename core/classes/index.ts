import { doc } from './doc';
import { param } from './param';
import { webload } from './webload';
import { window } from './window';
import { log } from './log';
import { json } from './jsonFetch';

webload.GamesResponse(json.games.get());

let shareParam = param.get.custom('share', '-');
switch (shareParam) {
    case 'twitch':
        window.push.open('https://www.twitch.tv/realspax');
        break;
    case 'instagram':
        window.push.open('https://instagram.com/real.spax');
        break;
}