'use strict';
import * as _ from 'underscore';
import * as BaseView from 'base/baseView.js';
import messageBus from 'messageBus.js';

export default BaseView.extend({
    postInitialize: function() {
        this.listenTo(messageBus, 'showCity', _.bind(this.showCity, this));
    },
    postRender: function() {
        var self = this;
        // @TODO Refactor this hack for setting full height
        window.setTimeout(function() {
            self.el.style.height = document.querySelector('core-drawer-panel').clientHeight - document.querySelector('core-toolbar').clientHeight + 'px';
        }, 0);

    },
    tagName: 'google-map',
    showCity: function(model) {
        this.model = model;
        this.el.setAttribute('latitude', this.model.get('lat'));
        this.el.setAttribute('longitude', this.model.get('long'));
        this.el.setAttribute('zoom', this.model.get('zoom'));
    }
});

