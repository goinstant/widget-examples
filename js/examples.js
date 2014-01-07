(function() {

var goinstant = window.goinstant;
var $ = window.$;
var _ = window._;

var template = window.template;
var config = window.config;

function Example(config) {
  this._name = config.name;
  this._desc = config.desc;
  this._test = config.test;
}

Example.prototype.load = function() {
  var common = $('#common');
  var data = {
    name: this._name,
    desc: this._desc
  };

  var header = _.template(template, data);
  common.append(header);

  var url = config.connectUrl;
  var connection = new goinstant.Connection(url);

  var self = this;

  connection.connect(function(err) {
    if (err) throw err;

    var room = connection.room(config.room);

    room.join(function (err) {
      if (err) throw err;

      // Exposing room for console testing
      window.exampleRoom = room;

      self._test(room);
    });
  });

  $('#stylesheetAdd').click(function() {
    var url = $('#stylesheet').val();
    $('<link />').attr('rel', 'stylesheet').attr('href', url).appendTo('head');
  });
};

window.Example = Example;
})();
