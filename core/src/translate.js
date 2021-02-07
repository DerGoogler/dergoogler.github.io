// Page Translate
class HtmlTranslate extends HTMLElement {
    connectedCallback() {
        if (navigator.language == 'en-US') {
            this.innerHTML = this.getAttribute('en')
        } else if (navigator.language == 'en-DE') {
            this.innerHTML = this.getAttribute('de')
        } else {
            this.innerHTML = this.getAttribute('en')
        }
    }
}
customElements.define("h-lang", HtmlTranslate);

// Get
function DECLARE(param) {
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?&]" + param + "=([^&#]*)");
    var url = decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});