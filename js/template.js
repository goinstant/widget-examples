window.template =
  '<div id="example_header">' +
    '<a href="index.html">Back to Examples Index</a>' +
    '<fieldset>' +
    '<legend>Add a stylesheet to check for conflicts</legend>' +
      '<select id="stylesheet">' +
        '<option value="../node_modules/widget-examples/css/vendor/bootstrap-3.0.1.min.css">Bootstrap 3.0.1</option>' +
        '<option value="../node_modules/widget-examples/css/vendor/bootstrap-2.3.2.min.css">Bootstrap 2.3.2</option>' +
        '<option value="../node_modules/widget-examples/css/vendor/jquery-ui-1.10.3.smoothness.min.css">jQuery UI 1.10.3</option>' +
      '</select>' +
      '<button id="stylesheetAdd">Add Stylesheet</button>' +
    '</fieldset>' +
    '<div style="clear:both"></div>' +
  '</div>' +
  '<div id="description">' +
    'This example page tests the <strong><%- name %></strong> widget with ' +
    '<strong><%- desc %></strong>.' +
  '</div>';
