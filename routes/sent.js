EmailClient.SentRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('email', function(email) {
      return (email.get("the_status") === "sent");
    });
  }
});
