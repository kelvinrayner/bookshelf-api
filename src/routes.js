/* eslint-disable max-len */
const {addBooks, getAllBooks, deleteSpecifiedBooks, getSpecifiedBooks} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteSpecifiedBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getSpecifiedBooks,
  },
];

module.exports = routes;
