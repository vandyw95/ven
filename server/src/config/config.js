module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'ven',
    user: process.env.DB_USER || 'ven',
    password: process.env.DB_PASS || 'ven',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './ven.sqlite'
    }
  }
}
