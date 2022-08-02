const express = require('express'); // import express module (simplifies routing/requests, among other things)
const cors = require('cors'); // import the CORS library to allow Cross-origin resource sharing
const helmet = require('helmet');
const app = express(); // create an instance of the express module (app is the conventional variable name used)
const path = require('path');
var bodyParser = require('body-parser');
const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');

const services = require('./services/requests'); 

const PORT = process.env.PORT || 5000; // use either the host env var port (PORT) provided by Heroku or the local port (5000) on your machine

app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));
app.use(helmet.noSniff());
app.use(helmet.hsts());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
app.use(expressCspHeader({
  directives: {
      'default-src': [SELF],
      'script-src': [SELF, INLINE, 'somehost.com'],
      'style-src': [SELF, 'fonts.googleapis.com'],
      'img-src': ['data:', 'cdn.pixabay.com', 'www.sandbox.paypal.com', 'www.paypalobjects.com'],
      'font-src': ['fonts.gstatic.com'], 
      'worker-src': [NONE],
  }
}));
app.use(cors()); // Enable CORS 
app.use(express.json()); // Recognize Request Objects as JSON objects
app.use(express.static('client/build')); // serve static files (css & js) from the 'public' directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:area', (req, res) => { 

  services.getProducts(req, res);
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => { // start server and listen on specified port
  console.log(`App is running on ${PORT}`) // confirm server is running and log port to the console
}) 
