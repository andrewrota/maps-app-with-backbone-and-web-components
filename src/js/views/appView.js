'use strict';
var _ = require('underscore');

var BaseView = require('base/baseView.js');
var MainPanelView = require('views/mainPanelView.js');
var DrawerPanelView = require('views/drawerPanelView.js');

var messageBus = require('messageBus.js');

module.exports = BaseView.extend({
    tagName: 'core-drawer-panel',
    subViews: {
        mainPanel: new MainPanelView(),
        drawerPanel: new DrawerPanelView()
    },
    postInitialize: function() {
        messageBus.on('toggleDrawer', _.bind(this.toggleDrawerPanel, this));
        return this;
    },
    toggleDrawerPanel: function() {
        this.el.togglePanel();
    }
});