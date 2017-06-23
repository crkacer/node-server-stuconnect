const knex = require('./knex'); //the connection!

module.exports = {
  getAll() {
    return knex('student'); // query to get all data in student table
  },
  getOne(id) {
    return knex('student').where('id', id).first();
  },
  create(student) {
    return knex('student').insert(student, '*');
  },
  update(id, student) {
    return knex('student').where('id', id).update(student, '*');
  },
  delete(id) {
    return knex('student').where('id', id).del();
  }
}
