const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const info = JSON.parse(body);
      info.forEach((ls) => {
        console.log(`${ls.id} ${ls.name}`);
      });
    },
  );
}

if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const rd = JSON.parse(body);
      console.log(rd.name);
    });
}

if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      if (response.statusCode === 200) {
        console.log(`You deleted a book ID: ${process.argv[3]}`);
      } else if (response.statusCode === 404) {
        console.log('not found');
      } else {
        console.log(response.statusCode);
      }
    });
}

if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name: process.argv[3],
      },
    }, (error, response, body) => {
      if (response.statusCode === 201) {
        const cr = JSON.parse(body);
        console.log('succeed to create');
        console.log(`Created a book ID is ${cr.id} ${cr.name}`);
      }
    },
  );
}

if (process.argv[2] === 'update') {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    form: {
      name: process.argv[4],
    },
  }, (error, response, body) => {
    const ud = JSON.parse(body);
    if (response.statusCode === 200) {
      console.log('succeed to update');
      console.log(`Updated ID ${ud.id} to ${ud.name}`);
    } else if (response.statusCode === 404) {
      console.log('error');
    } else {
      console.log(response.statusCode);
    }
  });
}
