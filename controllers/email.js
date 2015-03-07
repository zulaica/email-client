EmailClient.EmailController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      var email = this.get('model');
      email.deleteRecord();
      email.save();
      this.transitionToRoute('inbox');
    }
  }
});
