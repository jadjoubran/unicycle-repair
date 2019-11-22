import { LitElement, html } from "lit-element";

class AppTasks extends LitElement {
  render() {
    return html`
      <h2>It works!</h2>
    `;
  }
}

window.customElements.define("app-tasks", AppTasks);
