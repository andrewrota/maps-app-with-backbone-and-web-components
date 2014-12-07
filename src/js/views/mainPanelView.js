'use strict';
import * as BaseView from 'base/baseView.js';
import * as GoogleMapView from 'views/googleMapView.js';
import * as ToolbarView from 'views/toolbarView.js';
import * as mainToolbar from 'mainToolbar.mustache';

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