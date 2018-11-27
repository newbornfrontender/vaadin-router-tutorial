'use strict';

import { updateMetadata } from 'pwa-helpers/metadata';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Home</h1>
`;

class MyViewHome extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    updateMetadata({
      title: 'Home',
    });
  }
}

customElements.define('my-view-home', MyViewHome);
