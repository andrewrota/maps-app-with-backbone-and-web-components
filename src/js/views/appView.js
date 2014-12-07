'use strict';
import * as _ from 'underscore';
import * as Backbone from 'backbone';

import BaseView from 'base/baseView.js';
import MainPanelView from 'views/mainPanelView.js';
import DrawerPanelView from 'views/drawerPanelView.js';
import * as messageBus from 'messageBus.js';

export default BaseView.extend({
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