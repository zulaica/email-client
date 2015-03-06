EmailClient.ComposeController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get("subject"),
        sender: "yourname@domain.tld",
        recipient: this.get("recipient"),
        body: this.get("body"),
        the_status: "sent"
      });
      newEmail.save();
      this.transitionToRoute('sent');
    }
  }
});
