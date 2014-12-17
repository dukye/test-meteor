console.log('[SERVER] Loading methods ...');

/*
Meteor.startup(function () {
  Meteor.methods({
    'autoFormCreateUser': function (formDoc, e) {
      check(formDoc, Schemas.User);

      console.log('formDoc' ,  formDoc);

      var objUser = {
        "username": formDoc.username,
        "password": formDoc.password,
        "email": formDoc.emails[0].address
        // "profile": formDoc.profile
        // emails: formDoc.emails,
        // services: {},
        // roles: formDocs.roles
      };
      console.log(formDoc);

      return Accounts.createUser(formDoc);
    }
  });
});
*/

Meteor.methods({
  autoFormCreateUser: function (formDoc, e) {
      check(formDoc, Schemas.User);
      console.log(formDoc);

      return Accounts.createUser(formDoc);
  },
  autoFormCreateUserStep2: function (formDoc, e) {
    return;
  }
});