EmailClient.Router.map(function(){
  this.resource( "inbox", { path: "/" });
  this.resource('email', {path: '/emails/:email_id'});
  this.resource('compose');
  this.resource('sent');
});
