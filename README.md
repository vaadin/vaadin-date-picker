![Bower version](https://img.shields.io/bower/v/vaadin-date-picker.svg) [![Build Status](https://travis-ci.org/vaadin/vaadin-date-picker.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-date-picker)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/vaadin-core-elements?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# &lt;vaadin-date-picker&gt;

### [Live demo](https://cdn.vaadin.com/vaadin-core-elements/master/vaadin-date-picker/demo/)

[&lt;vaadin-date-picker&gt;](https://vaadin.com/elements/-/element/vaadin-date-picker) is a [Polymer](http://polymer-project.org) element providing a date selection field which includes a scrollable month calendar view, part of the [Vaadin Core Elements](https://vaadin.com/elements).

```html
<vaadin-date-picker label="Birthday">
</vaadin-date-picker>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-date-picker/master/screenshot.png" width="439" alt="Screenshot of vaadin-date-picker" />](https://vaadin.com/elements/-/element/vaadin-date-picker)


## Contributing

1. Fork the `<vaadin-date-picker>` repository.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-date-picker` directory, run `npm install` to install dependencies.


## Running demos and tests in browser

1. Install [polyserve](https://www.npmjs.com/package/polyserve): `npm install -g polyserve`

1. When in the `vaadin-date-picker` directory, run `polyserve --open`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:8080/components/vaadin-date-picker/demo
  - http://127.0.0.1:8080/components/vaadin-date-picker/test


## Running tests from the command line

1. Install [web-component-tester](https://www.npmjs.com/package/web-component-tester): `npm install -g web-component-tester`

1. When in the `vaadin-date-picker` directory, run `wct` or `npm test`, browser will automatically open the component API documentation.


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `gulp lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## License

Apache License 2.0
