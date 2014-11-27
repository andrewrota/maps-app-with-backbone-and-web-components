'use strict';
var  HeaderPanelView = require('views/headerPanelView.js');
var ToolbarView = require('views/toolbarView.js');
var mainToolbar = require('mainToolbar.mustache');

module.exports = HeaderPanelView.extend({
    postInitialize: function() {
        this.subViews = {
            toolbarView: new ToolbarView({template: mainToolbar})
        };
    },
    attributes: { main: true }
});