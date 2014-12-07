'use strict';
import * as Backbone from 'backbone';
import * as _ from 'underscore';
export default Backbone.View.extend({
    initialize: function(options) {
        this.options = options || {};
        this.postInitialize();
        return this;
    },
    postInitialize: function() {
        return this;
    },
    postRender: function() {
        return this;
    },
    render: function() {
        var self = this;
        var template = this.options.template || this.template;
        var subViews = this.options.subViews || this.subViews;
        if (subViews) {
            _.forEach(this.subViews, function(view) {
                view.render();
                self.$el.append(view.el);
            });
        }
        else if (template) {
            if (this.collection) {
                this.$el.html(template({collection: this.collection.toJSON()}));
            }
            else if (this.model) {
                this.$el.html(template(this.model.attributes));
            }
            else {
                this.$el.html(template());
            }
        }
        this.postRender();
        return this;
    }
});

