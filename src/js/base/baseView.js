'use strict';
var Backbone = require('backbone');
module.exports = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.postInitialize();
        return this;
    },
    postInitialize: function() { return this; },
    postRender: function() { return this; },
    render: function() {
       this.$el.html(this.options.template());
       this.postRender();
       return this;
    }
});