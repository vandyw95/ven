const AuthController = require('./controllers/AuthController')
module.exports = (app) => {
  app.get('/hello', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
  app.post('/register',
    AuthController.register
  )
  app.get('/music', (req, res) => {
    res.send({
      message: 'Here is the music you liked the other day'
    })
  })
}
