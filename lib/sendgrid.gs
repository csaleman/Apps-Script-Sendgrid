var Sendgrid = function (credentials) {
  var creds = this.creds = credentials || {};
  creds.user = creds.username || creds.user;

  if (!creds.user) {
     Logger.log('sendgrid-web requires a user.');
  }
  if (!creds.key) {
     Logger.log('sendgrid-web requires a key.');
  }
};

Sendgrid.prototype.send = function (opts) {

  var sendgrid = this;
  var payload = "";

  payload = "api_user=" + sendgrid.creds.user;
  payload +=  '&' + "api_key=" + sendgrid.creds.key;

  Object.keys(opts).forEach(function (key) {
    
    if (opts[key] instanceof Array) {
      for (var i = 0; i < opts[key].length; i++) {
         
          payload += '&' + key + "[]=" + opts[key][i];     

      }
      
      
    } else {
      payload += '&' + key + "=" + opts[key];
      }
  });   
  
   var options =
   {
     "method" : "post",
     "payload" : payload
   };
  
 
   Logger.log(options);
   UrlFetchApp.fetch("https://sendgrid.com/api/mail.send.json", options); 

  
}
