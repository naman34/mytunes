// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><a href="#/song/<%= title %>"><%= title %></a></td><td><button class="btn">Add To Queue</button></td>'),

  events: {
    'click a': function() {
      this.model.play();
    },
    'click .btn': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
