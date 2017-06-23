const knex = require('./knex'); //the connection!

module.exports = {
  getAll() {
    return knex('student'); // query to get all data in student table
  }
}
