import { doc } from './doc';
import { log } from './log';

export class dgsm {
  static parse(dlgmText: string) {
    const dlg = dlgmText
      .replace(/\{alert\{([\s\S]*?)\}([\s\S]*?)\}/gim, "<knecht-alert text='$1'>$2</knecht-alert>")
      .replace(/\[disable\]/gim, "")
    return dlg.trim()
  }
  static parseConfig(dlgmText: any) {
    var getcontent = dlgmText.getElementById('config').textContent;
    var cofingjson = JSON.parse(JSON.stringify(getcontent));
    log.log(cofingjson.title);
  }
}