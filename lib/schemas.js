console.log('[SERVER-CLIENT] Loading schemas ...');

Schemas = {};

/**
 * @desc 
 * User schema separated in 3 schemas : UserCountry, UserProfile, User
 * add add-ons if you want
 */
Schemas.UserCountry = new SimpleSchema({
  name: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "text",
        readonly: true,
        value: "France"
      }
    }
  },
  code: {
    type: String,
    regEx: /^[A-Z]{2}$/,
    autoform: {
      afFieldInput: {
        type: "text",
        readonly: true,
        value: "FR"
      }
    }
  }
});

Schemas.UserProfile = new SimpleSchema({
  firstName: {
    type: String,
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true
  },
  lastName: {
    type: String,
    regEx: /^[a-zA-Z]{2,25}$/,
    optional: true
  },
  birthday: {
    type: Date,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ['Male', 'Female'],
    optional: true
  },
  organization : {
    type: String,
    regEx: /^[a-z0-9A-z .]{3,30}$/,
    optional: true
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  bio: {
    type: String,
    optional: true
  },
  country: {
    type: Schemas.UserCountry,
    optional: true
  }
});

Schemas.User = new SimpleSchema({
  username: {
    type: String,
    regEx: /^[a-z0-9A-Z_]{3,15}$/,
    unique: true
  },
  password: {
    type: String,
    label: "Enter password",
    min: 6,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    }
  },
  confirmPassword: {
    type: String,
    label: "Enter the password again",
    min: 6,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "password"
      }
    },
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
  },
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: false,
    // type: String,
    // regEx: SimpleSchema.RegEx.Email,
    // unique: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    unique: true
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date,
    optional: true,
    blackbox: true,
    autoform: {
        afFieldInput: {
            value: new Date,
            // type: 'hidden',
            readonly: true
        }
    }
  },
  profile: {
    type: Schemas.UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // Add `roles` to your schema if you use the meteor-roles package.
  // Note that when using this package, you must also specify the
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
  // You can't mix and match adding with and without a group since
  // you will fail validation in some cases.
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  status: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

/**
 * @author duke Causing a bug in validation of user 
 *
 * @desc Exception while invoking method 'createUser' Error: Enter a password is required
 * Sow file server method.js
 */
// SimpleSchema.debug = true;
Meteor.users.attachSchema(Schemas.User);
