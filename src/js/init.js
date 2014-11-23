/* @flow */
'use strict';
var backbone = require('backbone');

var AppView = backbone.View.extend({
    tagName: 'google-map'
});
var app = new AppView({
    attributes: {
        latitude: '42.368410',
        longitude: '-71.090044',
        zoom: '15'
    }
}).$el.appendTo('#container');