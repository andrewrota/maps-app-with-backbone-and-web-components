'use strict';
var BaseView = require('base/baseView.js');
var ToolbarView = require('views/toolbarView.js');
var mainToolbar = require('mainToolbar.mustache');

module.exports = BaseView.extend({
    postInitialize: function() {
        this.subViews = {
            toolbarView: new ToolbarView({template: mainToolbar})
        };
    },
    tagName: 'core-header-panel',
    attributes: { main: true }
});