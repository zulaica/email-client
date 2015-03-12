EmailClient.InboxRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('email', function(email) {
      return (email.get("label") === "received");
    });
  }
});
