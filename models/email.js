EmailClient.Email = DS.Model.extend({
  subject: DS.attr(),
  sender: DS.attr(),
  recipient: DS.attr(),
  body: DS.attr(),
  the_status: DS.attr()
});
