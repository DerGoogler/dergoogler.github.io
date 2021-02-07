class ConfigTitle extends HTMLElement {
    connectedCallback() {
        document.title = this.getAttribute('title');
    }
}
customElements.define("config-title", ConfigTitle);