/* @flow */
'use strict';
var backbone = require('backbone');

var AppView = backbone.View.extend({
    render: function() {
        this.$el.text('Hello, world');
        return this;
    }
});

var app = new AppView({
    el: 'body'
}).render();