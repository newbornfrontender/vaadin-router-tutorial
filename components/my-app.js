'use strict';

import { Router } from '@vaadin/router';

const navList = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Not found',
    href: '/not-found',
  },
];

class MyApp extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
      <header>
        <nav>
          <ul>
            ${navList
              .map(({ text, href }) => `<li><a href="${href}">${text}</a></li>`)
              .join('')}
          </ul>
        </nav>
      </header>

      <main id="outlet"></main>
    `;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const outlet = this.shadowRoot.querySelector('#outlet');
    const router = new Router(outlet);

    router.setRoutes([
      {
        path: '/',
        action: () => import('./my-view-home'),
        component: 'my-view-home',
      },
      {
        path: '/about',
        action: () => import('./my-view-about'),
        component: 'my-view-about',
      },
      {
        path: '(.*)',
        action: () => import('./my-view-404'),
        component: 'my-view-404',
      },
    ]);
  }
}

customElements.define('my-app', MyApp);
