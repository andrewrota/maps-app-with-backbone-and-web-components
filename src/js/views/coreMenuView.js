'use strict';
var BaseView = require('base/baseView.js');
var Backbone = require('backbone');

var messageBus = require('messageBus.js');

module.exports = BaseView.extend({
    tagName: 'core-selector',
    events: {
        'click paper-item': 'handleClickItem'
    },
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
    }]),
    postRender: function() {
      // @TODO refactor selected city to be driven by events
      messageBus.trigger('showCity', this.collection.at(0));
      this.el.setAttribute('selected', 0);
    },
    handleClickItem: function(event) {
        messageBus.trigger('showCity', this.collection.findWhere({
            name: event.currentTarget.getAttribute('data-item-id')
        }));
    }
});