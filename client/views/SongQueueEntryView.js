// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><a href="#/song/<%= title %>"><%= title %></a></td><td><button class="btn">Remove</button></td>'),

  events: {
    'click a': function() {
      this.model.play();
    },
    'click .btn': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
