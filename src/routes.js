const {addBooks, getAllBooks, deleteSpecifiedBooks} = require('./handler');

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
];

module.exports = routes;
