/* jshint browser: true, node:true */
/* @flow */
'use strict';

import * as AppView from 'views/appView.js';
import * as jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

var app = new AppView({
    attributes: {
        responsiveWidth: '750px'
    }
});
app.$el.appendTo('#container');
app.render();