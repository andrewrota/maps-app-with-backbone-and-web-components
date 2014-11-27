'use strict';
var BaseView = require('base/baseView.js');
var ToolbarView = require('views/toolbarView.js');
var CoreMenuView = require('views/coreMenuView.js');
var drawerToolbar = require('drawerToolbar.mustache');
var menuListItem = require('menuListItem.mustache');
(function() {
    module.exports = BaseView.extend({
        tagName: 'core-header-panel',
        attributes: {
            drawer: true
        },
        subViews: {
            toolbarView: new ToolbarView({
                template: drawerToolbar
            }),
            menuView: new CoreMenuView({
                template: menuListItem
            })
        },
        template: drawerToolbar
    });
}());