const mongoose = require('mongoose');

const URI = "mongodb://localhost/mufla";

mongoose.connect(URI)
  .then( db => {
    console.log("Conected with DB");
  })
  .catch( err => {
    console.error(err);
  });

module.exports = mongoose;
