const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const info = JSON.parse(body);
    for (let i = 0; i < info.length; i += 1) {
      console.log(`${info[i].id} ${info[i].name}`);
    }
  },
);
