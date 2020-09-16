import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class DatePickerValidationDemos extends DemoReadyEventEmitter(DatePickerDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Required</h3>
    <vaadin-demo-snippet id="date-picker-required">
      <template preserve-content="">
        <vaadin-date-picker label="Required" required="" error-message="Please choose a date" id="datePicker"></vaadin-date-picker>
        <vaadin-button>Submit</vaadin-button>
        <script>
          window.addDemoReadyListener('#date-picker-required', function(document) {
            const submit = document.querySelector('vaadin-button');
            const datePicker = document.querySelector('vaadin-date-picker');
            submit.addEventListener('click', function(event) {
              datePicker.validate();
            });
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>

    <h3>Min and max date validation</h3>
    <vaadin-demo-snippet>
      <template preserve-content="">
        <vaadin-date-picker label="Label" min="2019-11-10" max="2019-11-11" initial-position="2019-11-11"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>

    <h3>Custom validator</h3>
    <p>
      Extend <code>Vaadin.DatePickerElement</code> to create your own custom element,
      then override the <code>checkValidity(value)</code> method to validate the input.
    </p>
    <vaadin-demo-snippet id="date-picker-custom-validator" ignore-ie="" when-defined="vaadin-date-picker">
      <template preserve-content="">
        <vaadin-date-picker-working-days label="Select a date working day"></vaadin-date-picker-working-days>
        <script>
          window.addDemoReadyListener('#date-picker-custom-validator', function(document) {
            class DatePickerWorkingDaysElement extends Vaadin.DatePickerElement {
              checkValidity(value) {
                if (new Date(value).getDay() == 0 || new Date(value).getDay() == 6) {
                  return false;
                }
                return true;
              }
            }
            if (!customElements.get('vaadin-date-picker-working-days')) {
              customElements.define('vaadin-date-picker-working-days', DatePickerWorkingDaysElement);
            }
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'date-picker-validation-demos';
  }
}
customElements.define(DatePickerValidationDemos.is, DatePickerValidationDemos);
