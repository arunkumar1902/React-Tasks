export default class CustomWebComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const name = this.getAttribute('name') || 'World';
      this.shadowRoot.innerHTML = `<p>Hello, ${name}!</p>`;
    }
  }
  
  customElements.define('my-greeting', CustomWebComponent);