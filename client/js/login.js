Template.login.events({

  'submit #login-form' : function(e, t){
    e.preventDefault();
    // retrieve the input field values
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

      // Trim and validate your fields here.... 

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err){
      if (err) {
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
      }
      else {
        // The user has been logged in.
        Router.go('home');
      }
    });
       return false; 
    },
    "click .login-twitter": function () {
      console.log('login twitter');
      Meteor.loginWithTwitter({
        requestPermissions: ['user']
      }, function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
        else {
          var user = Meteor.user();
          console.log(user);
          
          Router.go('home');
        }
      });
    },
    "click .login-facebook": function () {
      console.log('login facebook');
      Meteor.loginWithFacebook({
        requestPermissions: ['user_likes']
      }, function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
        else {
          var user = Meteor.user();
          console.log(user);
          
          Router.go('home');
        }
      });
    },
    "click .login-google": function () {
      console.log('login google');
      Meteor.loginWithGoogle({
        requestPermissions: ['user']
      }, function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
        else {
          var user = Meteor.user();
          console.log(user);
          
          Router.go('home');
        }
      });
    }
});
