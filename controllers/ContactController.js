let bodyParser = require('body-parser');
let urlencoded = bodyParser.urlencoded({extended: false})

module.exports = (app) => {
  app.get('/contact', (req, res) => {
    res.render('contact')
  })

  app.post('/contact', urlencoded, (req, res) => {
    let output = req.body;
    let result = Object.keys(output)
    console.log(req.body);
    res.render('returnPage', {info: result})
  })
}
