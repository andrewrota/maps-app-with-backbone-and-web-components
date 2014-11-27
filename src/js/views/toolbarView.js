'use strict';
var BaseView = require('base/baseView.js');
var messageBus = require('messageBus.js');
module.exports = BaseView.extend({
    tagName: 'core-toolbar',
    events: {
      'click .menu-button' : 'openMenu'
    },
    openMenu: function() {
        messageBus.trigger('toggleDrawer');
    }
});