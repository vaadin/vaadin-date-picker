/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-media-query/iron-media-query.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import './vaadin-date-picker-overlay.js';
import './vaadin-date-picker-overlay-content.js';
import { DatePickerMixin } from './vaadin-date-picker-mixin.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map.js';
/**
 *
 * `<vaadin-date-picker-light>` is a customizable version of the `<vaadin-date-picker>` providing
 * only the scrollable month calendar view and leaving the input field definition to the user.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `bindValue` by default. See the example below for a simplest possible example
 * using an `<input>` element extended with `iron-input`.
 *
 * ```html
 * <vaadin-date-picker-light>
 *   <iron-input>
 *     <input/>
 *   </iron-input>
 * </vaadin-date-picker-light>
 * ```
 *
 * If you are using other custom input fields like `<paper-input>`, you
 * need to define the name of value property using the `attrForValue` property.
 *
 * ```html
 * <vaadin-date-picker-light attr-for-value="value">
 *   <paper-input label="Birthday">
 *   </paper-input>
 * </vaadin-date-picker-light>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `overlay-content` | The overlay element | vaadin-date-picker-light
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * In addition to `<vaadin-date-picker-light>` itself, the following
 * internal components are themable:
 *
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker-light>`
 * is propagated to the internal themable components listed above.
 *
 * @extends PolymerElement
 * @mixes ThemableMixin
 * @mixes DatePickerMixin
 */
class DatePickerLightElement extends
  ThemableMixin(
    DatePickerMixin(PolymerElement)) {
  static get template() {
    return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([opened]) {
        pointer-events: auto;
      }
    </style>
    <slot></slot>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" opened="{{opened}}" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" on-date-tap="_close" role="dialog" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker-light';
  }

  static get properties() {
    return {
      /**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       * @attr {string} attr-for-value
       * @type {string}
       */
      attrForValue: {
        type: String,
        value: 'bind-value'
      },

      /**
       * @type {boolean}
       * @protected
       */
      _overlayInitialized: {
        type: Boolean,
        value: true
      }
    };
  }

  /**
   * @return {HTMLElement}
   * @protected
   */
  _input() {
    // Using the same selector than in combo-box.
    // TODO: revisit this to decide the selector and document conveniently.
    return this.querySelector('vaadin-text-field,iron-input,paper-input,.paper-input-input,.input');
  }

  set _inputValue(value) {
    if (this._inputElement) {
      this._inputElement[dashToCamelCase(this.attrForValue)] = value;
    }
  }

  /** @return {string | undefined} */
  get _inputValue() {
    return this._inputElement && this._inputElement[dashToCamelCase(this.attrForValue)];
  }
}

customElements.define(DatePickerLightElement.is, DatePickerLightElement);

export { DatePickerLightElement };
