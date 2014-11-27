'use strict';
var _ = require('underscore');

var BaseView = require('base/baseView.js');
var MainHeaderPanelView = require('views/mainHeaderPanelView.js');
var DrawerHeaderPanelView = require('views/drawerHeaderPanelView.js');

var messageBus = require('messageBus.js');

module.exports = BaseView.extend({
    tagName: 'core-drawer-panel',
    subViews: {
        mainPanel: new MainHeaderPanelView(),
        drawerPanel: new DrawerHeaderPanelView()
    },
    postInitialize: function() {
        messageBus.on('toggleDrawer', _.bind(this.toggleDrawerPanel, this));
        return this;
    },
    toggleDrawerPanel: function() {
        this.el.togglePanel();
    }
});