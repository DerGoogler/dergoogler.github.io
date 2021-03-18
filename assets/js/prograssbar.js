class PROGRESS extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="w3-light-grey w3-round"><div class="w3-container w3-blue w3-round" style="width:' + this.getAttribute('progress') + '%">' + this.getAttribute('progress') + '%</div></div><br>';
  }
}
customElements.define("dg-progress", PROGRESS);