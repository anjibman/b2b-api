const axios = require('axios');

const data = require('../data');

const ENV = 'devl';

const requests = data.users.map(user => {
    return axios({
        method: 'GET',
        url: `http://notification-preferences-service.${ENV}.us.i01.c01.johndeerecloud.com/users/${user}/notificationPreferences`,
        headers: {
            'X-Deere-Current-User': user,
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => ({
            response: response.data
        }),
        (err) => ({ err })
    )
});

module.exports = () => {
    axios.all(requests)
        .then(axios.spread((...responses) => {
            responses.forEach(res => console.log(res));
        }))
        .catch((err) => {
            throw err;
        });
};