'use strict';
var BaseView = require('base/baseView.js');
var ToolbarView = require('views/toolbarView.js');
var drawerToolbar = require('drawerToolbar.mustache');

module.exports = BaseView.extend({
    tagName: 'core-header-panel',
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