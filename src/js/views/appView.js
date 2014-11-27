'use strict';
var BaseView = require('base/baseView.js');
var PanelView = require('views/panelView.js');

// Templates
var mainToolbar = require('mainToolbar.mustache');
var drawerToolbar = require('drawerToolbar.mustache');

module.exports = BaseView.extend({
    tagName: 'core-drawer-panel',
    initialize: function() {
        this.subViews = [
            new PanelView({attributes: {'main' : true}, template: mainToolbar}),
            new PanelView({attributes: {'drawer' : true}, template: drawerToolbar})
        ];
        return this;
    },
    render: function() {
        var self = this;
        this.subViews.forEach(function(view) {
            view.render();
            self.$el.append(view.el);
        });
        return this;
    }
});