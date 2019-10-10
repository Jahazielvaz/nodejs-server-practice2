let express = require('express');
let path = require('path');
let app = express();

app.set('view engine', 'ejs');

// The set attribute is used to change any default ejs settings when it comes to filepaths etc.
// Remember that you have to actually include the name of the target directory, and then give it the name that you want to refrence it by
app.set('views', path.join(__dirname + '/public/views'));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(3000);
console.log("Currently Listening To Port 3000");
