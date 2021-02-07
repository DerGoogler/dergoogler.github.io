export class doc {
    static set = class {
        static HTML(id: any, html: any) {
            document.getElementById(id).innerHTML = html
        }
        static Text(id: any, text: any) {
            document.getElementById(id).innerText = text
        }
        static textContent(id: any, content: any) {
            document.getElementById(id).textContent = content
        }
        static attr(id: any, attr1: any, attr2: any) {
            document.getElementById(id).setAttribute(attr1, attr2)
        }
    }
    static get = class {
        static id(id: any) {
            document.getElementById(id)
        }
        static textContent(id: any) {
            document.getElementById(id).textContent
        }
        static attr(id: any, attr1: any) {
            document.getElementById(id).getAttribute(attr1)
        }
    }
    static f = class {
        static eventListener(eventListener: string, code: any) {
            document.addEventListener(eventListener, function () {
                code
            });
        }
        static avdClickListener(element: string, listener: string, code: any) {
            [].forEach.call(document.querySelectorAll(element), function (el) {
                el.addEventListener(listener, function () {
                    code
                });
            });
        }
    }
}