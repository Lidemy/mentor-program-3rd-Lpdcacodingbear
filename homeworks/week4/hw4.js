const request = require('request');

const clientID = '105sp5mszj18g07phgkjtbmcxlwpc5';

request({
  url: 'https://api.twitch.tv/helix/games/top',
  method: 'GET',
  headers: {
    'Client-ID': clientID,
  },
}, (error, response, body) => {
  const obj = JSON.parse(body);
  //   for (let i = 0; i < obj.data.length; i += 1) {
  //     console.log(obj.data[i].id, obj.data[i].name);
  //   }
  obj.data.forEach((value) => {
    console.log(`${value.id} ${value.name}`);
  });
});
