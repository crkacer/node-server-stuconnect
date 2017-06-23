
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', (table) => {
    table.increments();
    table.text('firstName');
    table.text('lastName');
    table.integer('age');
    table.float('point');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('student');
};
