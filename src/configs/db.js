/*  */
/*  */
const mongoose = require("mongoose");
/* const { database } = require("./key"); */

mongoose
  .connect(process.env.SERVER_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("DB is connected succesfully ..................");
  })
  .catch((err) => {
    console.error(err);
  });
