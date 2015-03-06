EmailClient.Email = DS.Model.extend({
  subject: DS.attr(),
  sender: DS.attr(),
  recipient: DS.attr(),
  body: DS.attr(),
  status: DS.attr(),
});
