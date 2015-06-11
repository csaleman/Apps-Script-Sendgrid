## This is a way to send emails from Apps script using sendgrid
## sendgrid-gs

Send emails with [sendgrid](http://sendgrid.com) and Apps script!

## Install:

    copy sendgrid.gs to you script project

## Example:

``` 
function sendEmail() {
  
 var to = "test@yahoo.com";
 var cc = "test@gmail.com";
 var bcc = "test@hotmail.com,test1@hotmail.com";
 var subject = "This is a test email";
 var body = '<font color="red">This is some text!</font>';
  
 sendGridEmail(to,cc,bcc,subject,body);
  
}

function sendGridEmail(to, cc, bcc, subject, body) {
    var sendgrid = new Sendgrid({
     user: "SGUSER",
     key: "SGPASSWORD"
    });
 
    var emailTo = to.split(',');
    var emailCc = cc.split(',');
    body = encodeURIComponent(body);
   
    sendgrid.send({
      to: emailTo,
      cc: emailCc,
      from: 'test@test.com',
      subject: subject,
      html: body,
      fromname:'From Test Sendgrid'
    });
  
}
```

## Usage:

### new Sendgrid(credentials)

This constructor creates a new sendgrid object. The "credentials" object should contain:

* `user`: Your sendgrid username
* `key`: Your sendgrid API key/password

### sendgrid.send(options, cb)

Sends an email. Options are the same as those of the [sendgrid json web api](http://sendgrid.com/documentation/display/api/WebMail). Common ones include:

* **to:** The recipient of the email.
* **from:** The email address to reply back to.
* **subject:** The subject of the email.
* **html:** The body of the email, if it's intended to be treated like html.
* **text:** The body of the email, if it's intended to be treated like plaintext.


**Author:** Carlos Silva based on Joshua Holbrook work
