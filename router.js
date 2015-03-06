EmailClient.Router.map(function(){
  this.resource( "inbox", { path: "/" });
  this.resource('email', {path: '/inbox/email/:email_id'});
});
