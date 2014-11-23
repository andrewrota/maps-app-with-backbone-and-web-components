/* @flow */
'use strict';
var backbone = require('backbone');
window.$ = require('jquery');

var PanelView = backbone.View.extend({
    tagName: 'core-header-panel'
});

var AppView = backbone.View.extend({
    tagName: 'core-drawer-panel',
    initialize: function() {
        this.subViews = [
            new PanelView({attributes: {'drawer' : true}}),
            new PanelView({attributes: {'main' : true}})
        ];
        return this;
    },
    render: function() {
        var self = this;
        this.subViews.forEach(function(view) {
            // Temporary strategy pattern to set toolbar elements
            // @todo use additional views and templates for toolbars
            if(view.$el.attr('main')) {
                view.$el.html('<core-toolbar> <paper-button> <core-icon icon="menu"></core-icon> </paper-button><span flex>My notes</span><paper-button> <core-icon icon="search"></core-icon> </paper-button> <paper-button> <core-icon icon="more-vert"></core-icon> </paper-button> </core-toolbar>');
            } else if(view.$el.attr('drawer')) {
                view.$el.html('<core-toolbar>Menu</core-toolbar>');
            }
            self.$el.append(view.el);
        });
        return this;
    }
});
var app = new AppView({
    attributes: {
        responsiveWidth: '600px'
    }
});
app.$el.appendTo('#container');
app.render();