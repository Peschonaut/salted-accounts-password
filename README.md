# salted-accounts-password

This package extends Meteor's default accounts-password library to account for a `user._id` salt.
It also provides an upgrade path for users with unsalted passwords.
Furthermore, it increases the number of bcrypt rounds from 10 to 12.

You can run tests by calling `./meteor test-packages ./` in the package's directory.

Based upon meteor/accounts-password:
```
[Source code of released version](https://github.com/meteor/meteor/tree/master/packages/accounts-password)

[Source code of development version](https://github.com/meteor/meteor/tree/devel/packages/accounts-password)
***

A login service that enables secure password-based login. See the [project page](https://www.meteor.com/accounts) on Meteor Accounts for more details.
```
