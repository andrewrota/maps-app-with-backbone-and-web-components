/* jshint browser: true, node:true */
/* @flow */
'use strict';

var AppView = require('views/appView.js');
window.$ = window.jQuery = require('jquery');

var app = new AppView({
    attributes: {
        responsiveWidth: '750px'
    }
});
app.$el.appendTo('#container');
app.render();