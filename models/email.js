EmailClient.Email = DS.Model.extend({
  subject: DS.attr(),
  sender: DS.attr(),
  recipient: DS.attr(),
  body: DS.attr(),
  label: DS.attr(),
  mailbox: DS.belongsTo('mailbox', {async: true})
});
