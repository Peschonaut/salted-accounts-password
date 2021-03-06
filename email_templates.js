function greet(welcomeMsg) {
    return function (user, url) {
        const greeting = (user.profile && user.profile.name) ?
            (`Hello ${user.profile.name},`) : 'Hello,';
        return `${greeting}

${welcomeMsg}, simply click the link below.

${url}

Thanks.
`;
    };
}

/**
 * @summary Options to customize emails sent from the Accounts system.
 * @locus Server
 * @importFromPackage accounts-base
 */
Accounts.emailTemplates = {
    from: 'Meteor Accounts <no-reply@meteor.com>',
    siteName: Meteor.absoluteUrl().replace(/^https?:\/\//, '').replace(/\/$/, ''),

    resetPassword: {
        subject(user) {
            return `How to reset your password on ${Accounts.emailTemplates.siteName}`;
        },
        text: greet('To reset your password')
    },
    verifyEmail: {
        subject(user) {
            return `How to verify email address on ${Accounts.emailTemplates.siteName}`;
        },
        text: greet('To verify your account email')
    },
    enrollAccount: {
        subject(user) {
            return `An account has been created for you on ${Accounts.emailTemplates.siteName}`;
        },
        text: greet('To start using the service')
    }
};
