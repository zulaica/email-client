EmailClient.InboxRoute = Ember.Route.extend({
  model: function() {
    var isInbox = true;
    return this.store.filter('email', function(email) {
      return (email.get("status") === "received");
    });
  }
});
