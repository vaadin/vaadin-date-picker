[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-date-picker)](https://www.npmjs.com/package/@vaadin/vaadin-date-picker)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-date-picker)
[![Build Status](https://travis-ci.org/vaadin/vaadin-date-picker.svg?branch=master)](https://travis-ci.org/vaadin/vaadin-date-picker)
[![Coverage Status](https://coveralls.io/repos/github/vaadin/vaadin-date-picker/badge.svg?branch=master)](https://coveralls.io/github/vaadin/vaadin-date-picker?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-date-picker)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadinvaadin-date-picker.svg)](https://vaadin.com/directory/component/vaadinvaadin-date-picker)

# &lt;vaadin-date-picker&gt;

[Live Demo ↗](https://vaadin.com/components/vaadin-date-picker/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-date-picker/html-api)

[&lt;vaadin-date-picker&gt;](https://vaadin.com/components/vaadin-date-picker) is a Web Component providing a date selection field which includes a scrollable month calendar view, part of the [Vaadin components](https://vaadin.com/components).

```html
<vaadin-date-picker label="Label" placeholder="Placeholder">
</vaadin-date-picker>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-date-picker/master/screenshot.png" width="439" alt="Screenshot of vaadin-date-picker">](https://vaadin.com/components/vaadin-date-picker)

## Installation

Install `vaadin-date-picker`:

```sh
npm i @vaadin/vaadin-date-picker --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The components with the Lumo theme:

  `theme/lumo/vaadin-date-picker.js`
  `theme/lumo/vaadin-date-picker-light.js`

- The components with the Material theme:

  `theme/material/vaadin-date-picker.js`
  `theme/material/vaadin-date-picker-light.js`

- Alias for `theme/lumo/vaadin-date-picker.js`
  `theme/lumo/vaadin-date-picker-light.js`:

  `vaadin-date-picker.js`
  `vaadin-date-picker-light.js`


## Running APi docs and tests in a browser

1. Fork the `vaadin-date-picker` repository and clone it locally.

1. Make sure you have [node.js](https://nodejs.org/) 12.x installed.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-date-picker` directory, run `npm install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.

1. You can also open visual tests, for example:

  - http://127.0.0.1:3000/test/visual/default.html

## Running tests from the command line

1. When in the `vaadin-date-picker` directory, run `npm test`

## Debugging tests in the browser

1. Run `npm run debug`, then choose manual mode (M) and open the link in browser.


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.js` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
