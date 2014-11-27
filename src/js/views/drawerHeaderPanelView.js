'use strict';
var HeaderPanelView = require('views/headerPanelView.js');
var ToolbarView = require('views/toolbarView.js');
var drawerToolbar = require('drawerToolbar.mustache');

module.exports = HeaderPanelView.extend({
    attributes: {
        drawer: true
    },
    subViews: {
        toolbarView: new ToolbarView({
            template: drawerToolbar
        })
    },
    template: drawerToolbar
});