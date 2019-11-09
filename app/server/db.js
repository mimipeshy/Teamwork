const { Pool } = require('pg');
// your credentials
DATABASE_URL = 'postgres://postgres:admin@localhost:5432/teamwork';
const db = new Pool({
  connectionString: DATABASE_URL
});

console.log("successful connection")

// a generic query, that executes all queries sent to it
function query(text) {
  return new Promise((resolve, reject) => {
    db
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  db
};