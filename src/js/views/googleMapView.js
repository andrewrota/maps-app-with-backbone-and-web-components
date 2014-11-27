'use strict';
var _ = require('underscore');
var BaseView = require('base/baseView.js');
var messageBus = require('messageBus.js');

module.exports = BaseView.extend({
    postInitialize: function() {
        this.listenTo(messageBus, 'showCity', _.bind(this.showCity, this));
    },
    tagName: 'google-map',
    showCity: function(model) {
        this.model = model;
        this.el.setAttribute('latitude', this.model.get('lat'));
        this.el.setAttribute('longitude', this.model.get('long'));
        this.el.setAttribute('zoom', this.model.get('zoom'));
    }
});