import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class DatePickerBasicDemos extends DemoReadyEventEmitter(DatePickerDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Basic usage</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker label="Label"></vaadin-date-picker>
        <vaadin-date-picker placeholder="Placeholder"></vaadin-date-picker>
        <vaadin-date-picker value="1990-01-28"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Disabled and read-only</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker disabled="" label="Disabled" value="1990-01-28"></vaadin-date-picker>
        <vaadin-date-picker readonly="" label="Read-only" value="1990-01-28"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Clear button</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker clear-button-visible="" label="Label" value="1990-01-28"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Helper text</h3>
    <p>Use the <code>helper-text</code> attribute or add content to the <code>helper</code> slot to set helper content.</p>
    <vaadin-demo-snippet id="helper-text">
      <template preserve-content="">
        <vaadin-date-picker label="Event date">
          <span slot="helper">International date format</span>
        </vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Value change event</h3>
    <vaadin-demo-snippet id="value-change-event" when-defined="vaadin-date-picker">
      <template preserve-content="">
        <vaadin-date-picker label="Label"></vaadin-date-picker>
        <div>Selected value: <span id="output"></span></div>
        <script>
          window.addDemoReadyListener('#value-change-event', function(document) {
            const datePicker = document.querySelector('vaadin-date-picker');
            const output = document.querySelector('#output');
            datePicker.addEventListener('change', function(event) {
              output.textContent = event.target.value;
            });
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>

    <h3>Auto open disabled</h3>
    <p>Dropdown is only opened when clicking the toggle button or pressing Up or Down arrow keys.</p>
    <vaadin-demo-snippet id="auto-open-disabled" when-defined="vaadin-date-picker">
      <template preserve-content="">
        <vaadin-date-picker label="Label" auto-open-disabled=""></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'date-picker-basic-demos';
  }
}
customElements.define(DatePickerBasicDemos.is, DatePickerBasicDemos);
