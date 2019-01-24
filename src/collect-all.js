const async = require('async');

const getPreferences = (user, callback) => {
    return callback(null, user.toUpperCase());
};

const callAll = () => {
    const users = ['anjib', 'sanjib', 'kunjini', 'evara'];

    async.map(users, getPreferences, (err, data) => {
        console.log('data: ' + JSON.stringify(data));
    } );

};

callAll();
