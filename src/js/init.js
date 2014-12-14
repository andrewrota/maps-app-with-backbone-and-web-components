/* jshint browser: true, node:true */
/* @flow */
'use strict';

import * as AppView from 'views/appView.js';
import * as jQuery from 'jquery';
import * as Backbone from 'backbone';

window.$ = window.jQuery = jQuery;

var app = new AppView({
    attributes: {
        responsiveWidth: '750px'
    }
});
app.$el.appendTo('#container');
app.render();

// @todo refactor this demo view into its own module
window.View = Backbone.View.extend({
  tagName: 'paper-toast',
  attributes: {
    text: 'Welcome!',
    autoCloseDisabled: true,
    duration: '5000',
    opened: true
  },
  events: {
    'core-overlay-open-completed': function() { console.log('opened'); }
  },
  toggle: function() {
    this.el.toggle();
  }
});
window.view = new window.View();
jQuery('#container').append(window.view.el);