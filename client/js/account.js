console.log('[CLIENT] Template account.js ...');

Template.account.helpers({
	firstEmail: function () {
    return Meteor.user().emails[0].address;
  }
});