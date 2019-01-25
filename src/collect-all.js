const async = require('async');

const getPreferences = (user, callback) => {
    return callback(null, user.toUpperCase());
};

module.exports = () => {
    const users = ['anjib', 'sanjib', 'kunjini', 'evara'];

    async.map(users, getPreferences, (err, data) => {
        console.log('data: ' + JSON.stringify(data));
    } );

};