import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class DatePickerThemeVariantsDemos extends DemoReadyEventEmitter(DatePickerDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Text align</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker value="1990-01-28" theme="align-left"></vaadin-date-picker>
        <vaadin-date-picker value="1990-01-28" theme="align-center"></vaadin-date-picker>
        <vaadin-date-picker value="1990-01-28" theme="align-right"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Small text field</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker theme="small" label="Label"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Helper text position</h3>
    <vaadin-demo-snippet id="helper-text-positions">
      <template preserve-content="">
        <vaadin-date-picker helper-text="helper text below date picker"></vaadin-date-picker>
        <vaadin-date-picker helper-text="helper text above date picker" theme="helper-above-field"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'date-picker-theme-variants-demos';
  }
}
customElements.define(DatePickerThemeVariantsDemos.is, DatePickerThemeVariantsDemos);
