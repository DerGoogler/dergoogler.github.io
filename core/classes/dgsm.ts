export class dgsm {
    static parse(dlgmText: string) {
      const dlg = dlgmText
        .replace(/\{alert\{([\s\S]*?)\}([\s\S]*?)\}/gim, "<knecht-alert text='$1'>$2</knecht-alert>")
        .replace(/\[disable\]/gim, "")
      return dlg.trim()
    }
  }