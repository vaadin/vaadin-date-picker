const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="not-animated-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-date-picker-overlay">
      :host([opening]),
      :host([closing]),
      :host([opening]) [part="overlay"],
      :host([closing]) [part="overlay"] {
        animation: none !important;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
