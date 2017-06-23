// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/student-connect'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-student-connect'
  }
};
