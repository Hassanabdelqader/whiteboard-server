/*eslint-disable */
"use strict"
const app = require('./app');
const {db} = require("./models/index")

const port = process.env.PORT || 5000;


db.sync().then(() => {
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
  });
}).catch(err =>console.log("error"));
