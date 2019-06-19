require('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


//body-parser
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
 
app.use(bodyParser.json());

//cors
var whitelist = ['http://192.168.6.178:4000/notes', 'http://192.168.6.152','http://localhost:4000/','chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop','http://localhost:']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || origin == undefined) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
 
app.use(cors(corsOptions));

//route
routes(app)

//listening port
app.listen(port, () => {
    console.log(`Note App Running on http://localhost:${port}/`)
});
