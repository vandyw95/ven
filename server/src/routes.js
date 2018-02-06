module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
  app.post('/register', (req, res) => {
    res.send({
      message: `${req.body.email} Registered!`
    })
  })
}
