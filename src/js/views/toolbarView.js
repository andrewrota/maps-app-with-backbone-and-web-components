'use strict';
import * as BaseView from 'base/baseView.js';
import * as messageBus from 'messageBus.js';
export default BaseView.extend({
    tagName: 'core-toolbar',
    events: {
      'click .menu-button' : 'openMenu'
    },
    openMenu: function() {
        messageBus.trigger('toggleDrawer');
    }
});