Package.describe({
    name: 'peschonaut:salted-accounts-password',
    version: '0.0.1',
    summary: 'This package extends Meteor\'s default accounts-password library to account for a user._id salt.',
    git: 'https://github.com/Peschonaut/salted-accounts-password.git',
    documentation: 'README.md'
});

Package.onUse((api) => {

    api.use('npm-bcrypt@0.9.2', 'server');

    api.use([
        'accounts-base@1.2.17',
        'srp@1.0.10',
        'sha@1.0.9',
        'ejson@1.0.13',
        'ddp@1.2.5'
    ], ['client', 'server']);

    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);

    api.use('email@1.2.1', ['server']);
    api.use('random@1.0.10', ['server']);
    api.use('check@1.2.5');
    api.use('underscore@1.0.10');
    api.use('ecmascript@0.7.3');

    api.addFiles('email_templates.js', 'server');
    api.addFiles('password_server.js', 'server');
    api.addFiles('password_client.js', 'client');
});

Package.onTest((api) => {
    api.use(['accounts-password', 'tinytest', 'test-helpers', 'tracker',
        'accounts-base', 'random', 'email', 'underscore', 'check',
        'ddp', 'ecmascript']);
    api.addFiles('password_tests_setup.js', 'server');
    api.addFiles('password_tests.js', ['client', 'server']);
    api.addFiles('email_tests_setup.js', 'server');
    api.addFiles('email_tests.js', 'client');
});
