const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes');

//body-parser
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,FETCH,POST,DELETE")
    next()
  })
  
routes(app)


//listening port
app.listen(port, () => {
    console.log(`Note App Running on http://localhost:${port}/`)
});
