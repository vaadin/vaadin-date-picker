import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-date-picker-overlay',
  css`
    :host {
      align-items: flex-start;
      justify-content: flex-start;
    }

    :host([bottom-aligned]) {
      justify-content: flex-end;
    }

    :host([right-aligned]) {
      align-items: flex-end;
    }

    :host([dir='rtl']) {
      align-items: flex-end;
    }

    :host([dir='rtl'][right-aligned]) {
      align-items: flex-start;
    }

    [part='overlay'] {
      display: flex;
      flex: auto;
    }

    [part~='content'] {
      flex: auto;
    }
  `,
  { moduleId: 'vaadin-date-picker-overlay-styles' }
);
