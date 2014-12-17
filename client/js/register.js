console.log('[CLIENT] Template register.js ...');


Template.register.helpers({
  users: function () {
   return Schemas.User;
  }
});

/*
Template.register.events({
  "submit #insertUser": function (e, t) {
    // e.preventDefault();
    var id;

    Meteor.call('autoFormCreateUser');

    return false;

    var objUser = {
      "username": t.find('#username').value,
      "password": t.find('#password').value,
      "email": t.find('#email').value
    };

    var firstName = t.find('#firstName').value;
    var lastName = t.find('#lastName').value;

    Accounts.createUser(objUser, function (err) {
      if ( ! err ) {
        console.log('ok created');
        var user_id = Meteor.userId();
        console.log(user_id);
        
        Roles.addUsersToRoles(user_id, ['user', 'free']);

        Meteor.users.update(
          { _id: user_id },
          {
            $set:{
              "profile.name": firstName + ' ' + lastName,
              "profile.lastName": lastName,
              "profile.firstName": firstName
            }
          }
        );
      }
      else {
        console.log(err);
      }
    });

    return false;
  }
});
*/