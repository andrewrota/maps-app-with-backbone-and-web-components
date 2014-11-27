'use strict';
var BaseView = require('base/baseView.js');
var Backbone = require('backbone');

module.exports = BaseView.extend({
    tagName: 'core-menu',
    collection: new Backbone.Collection([{
        name: 'Boston',
        lat: '42.3581',
        long: '-71.0636',
        zoom: 10
    }, {
        name: 'New York City',
        lat: '40.7127',
        long: '-74.0059',
        zoom: 10
    }])
});