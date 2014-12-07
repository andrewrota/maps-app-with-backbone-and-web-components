'use strict';
import * as BaseView from 'base/baseView.js';
import * as ToolbarView from 'views/toolbarView.js';
import * as CoreMenuView from 'views/coreMenuView.js';
import * as drawerToolbar from 'drawerToolbar.mustache';
import * as menuListItem from 'menuListItem.mustache';
export default BaseView.extend({
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