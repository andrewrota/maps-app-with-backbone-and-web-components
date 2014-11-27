'use strict';
var BaseView = require('base/baseView.js');
var GoogleMapView = require('views/googleMapView.js');
var ToolbarView = require('views/toolbarView.js');
var mainToolbar = require('mainToolbar.mustache');

module.exports = BaseView.extend({
    postInitialize: function() {
        this.subViews = {
            toolbarView: new ToolbarView({template: mainToolbar}),
            googleMapView: new GoogleMapView()
        };
    },
    tagName: 'core-header-panel',
    attributes: { main: true }
});