'use strict';
import * as BaseView from 'base/baseView.js';
import * as Backbone from 'backbone';

import * as messageBus from 'messageBus.js';

export default BaseView.extend({
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
    },
    {
        name: 'Chicago',
        lat: '41.8369',
        long: '-87.6847',
        zoom: 10
    },{
        name: 'Cincinnati',
        lat: '39.1000',
        long: '-84.5167',
        zoom: 10
    },{
        name: 'St. Louis',
        lat: '38.6272',
        long: '-90.1978',
        zoom: 10
    },{
        name: 'Pittsburgh',
        lat: '40.4417',
        long: '-80.0000',
        zoom: 10
    },{
        name: 'New Orleans',
        lat: '29.9667',
        long: '-90.0500',
        zoom: 10
    },{
        name: 'Austin',
        lat: '30.2500',
        long: '-97.7500',
        zoom: 10
    },{
        name: 'San Francisco',
        lat: '37.7833',
        long: '-122.4167',
        zoom: 10
    },{
        name: 'Portland',
        lat: '45.5200',
        long: '-122.6819',
        zoom: 10
    },{
        name: 'Honolulu',
        lat: '21.3000',
        long: '-157.8167',
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