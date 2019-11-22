import { LitElement, html } from "lit-element";

class AppStock extends LitElement {
  activate() {
    console.debug("activate was called!");
  }

  render() {
    return html`
      <h2>App Stock!</h2>
    `;
  }
}

window.customElements.define("app-stock", AppStock);
