module.exports = (app) => {
  app.get('/:name', (req, res) => {
    res.render('index', {name: req.params.name})
  })


}
