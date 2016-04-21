var Component, Model, _,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

_ = require("underscore");

Model = require("../model");

Component = (function(superClass) {
  extend(Component, superClass);

  function Component() {
    return Component.__super__.constructor.apply(this, arguments);
  }

  Component.prototype.type = "Component";

  Component.prototype.defaults = function() {
    return _.extend({}, Component.__super__.defaults.call(this), {
      disabled: false
    });
  };

  return Component;

})(Model);

module.exports = {
  Model: Component
};
