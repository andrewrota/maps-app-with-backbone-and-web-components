'use strict';
var Backbone = require('backbone');
var _ = require('underscore');
module.exports = Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.postInitialize();
        return this;
    },
    postInitialize: function() { return this; },
    postRender: function() { return this; },
    render: function() {
        var self = this;
        if(this.subViews) {
            _.forEach(this.subViews, function(view) {
                view.render();
                self.$el.append(view.el);
            });
        } else if(this.options.template) {
            this.$el.html(this.options.template());
        }
       this.postRender();
       return this;
    }
});