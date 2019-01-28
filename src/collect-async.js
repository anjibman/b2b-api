const async = require('async');
const axios = require('axios');
const data = require('../data');

const ENV = 'devl';

const getPreferences = (user, callback) => {
    console.log(`Getting preferences for ${user}`);
    axios({
        method: 'GET',
        url: `http://notification-preferences-service.${ENV}.us.i01.c01.johndeerecloud.com/users/${user}/notificationPreferences`,
        headers: {
            'X-Deere-Current-User': user,
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(`Got preferences for ${user}`);
        if (!response.data.length) {
            console.log(`${user} does not have preferences`);
        }
        return callback(null, response.data);
    }).catch((error) => {
        return callback(error.message);
    });
};

module.exports = () => {
    async.map(data.users, getPreferences, (err, data) => {
        console.log('data: ' + JSON.stringify(data));
    });
};