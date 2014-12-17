Meteor testing 0.0.1
==================================================



Changelog
======================
15-12-2014 - add-ons
Create first register authentication part

12-12-2014 - first draft
Adding first pages, routes etc.



Installed packages
======================

A first draft of meteor app with personal parameters

## Packages meteor name and source

- Iron-router - Url router (https://github.com/EventedMind/iron-router)
```
$ meteor add iron:router
```

- Collection2 (https://github.com/aldeed/meteor-collection2)
```
$ meteor add aldeed:collection2 
```

- SimpleSchema (https://github.com/aldeed/meteor-simple-schema)
```
$ meteor add aldeed:simple-schema
```

- AutoForm (https://github.com/aldeed/meteor-autoform)
```
$ meteor add aldeed:autoform
```

- Meteor Accounts-base (Meteor.users)
```
$ meteor add accounts-base
```

- Meteor Accounts passwords (Meteor.users)
```
$ meteor add accounts-password
```

- Facebook, Twitter, Google etc.
```
$ meteor add accounts-facebook
$ meteor add accounts-twitter
$ meteor add accounts-google
$ meteor add facebook
$ meteor add twitter
$ meteor add google
```

- Service configuration - Manage the configuration for third-party services (Facebook, Tiwtter, Google etc. conf)
```
$  meteor add service-configuration
```

- Link accounts (Social account link éMeteor.user ...loginWith by linkWith) 
```
$ meteor add bozhao:link-accounts
```

- UserRoles (https://github.com/alanning/meteor-roles)
```
$ meteor add alanning:roles
```

- UserStatus (https://github.com/mizzao/meteor-user-status)
```
$ meteor add mizzao:user-status
```

- Bootstrap Less & Less package (https://github.com/Nemo64/meteor-bootstrap)
```
$ meteor add nemo64:bootstrap less
```

- HoustonAdmin for MongoDB Collections
```
$ meteor add houstonadmin
```

- Remove autopublish (Meteor package)
```
$ meteor remove autopublish
```

NOT INSTALLED YET !
```
$ meteor add underscore
$ meteor add cfs:autoform
$ meteor add cfs:gridfs
$ meteor add cfs:standard-packages
$ meteor add cfs:filesystem
```


Running
======================

- Development 
```
$ source config/development.sh
$ meteor --port $PORT
```

- Production
```
$ source config/production.sh
$ meteor --port $PORT
```
