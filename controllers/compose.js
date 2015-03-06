EmailClient.ComposeController = Ember.Controller.extend({
  actions: {
    send: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get("subject"),
        sender: "yourname@domain.tld",
        recipient: this.get("recipient"),
        body: this.get("body"),
        status: "sent"
      });
      newEmail.save();
      this.set("subject", null);
      this.set("sender", null);
      this.set("recipient", null);
      this.set("body", null);
      this.set("status", null);
      this.transitionToRoute('sent');
    }
  }
});
