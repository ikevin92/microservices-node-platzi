module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
    user: process.env.MYSQL_USER || 'sql10525633',
    password: process.env.MYSQL_PASS || 'KXYQIa7alh',
    database: process.env.MYSQL_DB || 'sql10525633',
  },
};

//https://www.freemysqlhosting.net/account/?msg=943
//https://www.phpmyadmin.co/