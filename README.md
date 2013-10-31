# Widget Examples

Contains the common code for the GoInstant widget examples.

`example.html.example` is the template that should be used for creating new
examples. This will setup everything in the example page except for the example
specific code and expected results.

### Usage

To create a new example copy the template `example.html.example` to a new HTML
file located at `<widget-root>/examples` and fill out the following:

```js
/** Initialize widget(s) for example here
 *
 * Also include any example specific code needed to ensure the widget
 * behaves as expected.
 */
```

```js
// Replace 'Widget Name' with the widget being tested.
// Replace 'example description' with a short description of this example.
var config = {
  name: 'Widget Name',
  desc: 'example description',
  test: widgetTest
};
```

```html
<ul>
  <!-- Place expected results here -->
  <li>Expected <strong>results</strong> go here.</li>
</ul>
```

### The template assumes the following:

**There is a config file located at `../config/config.js` and when included will
 create a `config` object on the window. This object should have the following
structure:**

```js
window.config = {
  connectUrl: 'https://goinstant.net/YOUR_ACCOUNT/YOUR_APP',
  room: 'goinstant-widgets-examples'
};
```

**This repo was installed via `npm install` and the template can find the root
of this repo at `../node_modules/widget-examples`.**

**lodash was installed via `npm install` and can be found at
`../node_modules/lodash`**
