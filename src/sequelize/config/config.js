require('dotenv').config()
const {SQL_USERNAME,SQL_PASSWORD,SQL_DATABASE,SQL_HOST,SQL_PORT} = process.env

module.exports = {
  "development": {
    "username": SQL_USERNAME,
    "password": SQL_PASSWORD,
    "database": SQL_DATABASE,
    "host": SQL_HOST,
    "dialect": "mysql",
    "port":SQL_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
