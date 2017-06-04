// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest';

// Import and rename a variable exported by sevenlanes-accounts-password.js.
import { name as packageName } from 'meteor/laymi:sevenlanes-accounts-password';

// Write your tests here!
// Here is an example.
Tinytest.add('sevenlanes-accounts-password - example', (test) => {
    test.equal(packageName, 'sevenlanes-accounts-password');
});
