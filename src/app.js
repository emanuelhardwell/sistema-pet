/*  */
/*  */
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
/* const methodOverride = require("method-override"); */
/* const flash = require("connect-flash");
const session = require("express-session"); */
const mongoose = require("mongoose");
/* const passport = require("passport"); */
/* const MongoStore = require("connect-mongo")(session); */

// required
dotenv.config({ path: "./src/configs/config.env" });
require("./configs/db");
/* require("./configs/passport"); */

// config the app
const app = express();

app.set("port", process.env.PORT || 3000);

// config the engine
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./helpers/helper"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* app.use(
  session({
    secret: "hardwell",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
); */
/* app.use(passport.initialize());
app.use(passport.session()); */

/* app.use(flash()); */

// global variables
// app.use((req, res, next) => {
//   res.locals.successMessage = req.flash("successMessage");
//   res.locals.errorMessage = req.flash("errorMessage");
//   res.locals.error = req.flash("error"); /* este pertenece a passport */
//   res.locals.user = req.user || null;
//   next();
// });

// static files
app.use(express.static(path.join(__dirname, "public")));

// get routes
app.use(require("./routes/index.routes"));
/* app.use("/auth", require("./routes/auth.routes"));
app.use("/stories", require("./routes/story.routes")); */

// listen the server
app.listen(
  app.get("port"),
  console.log(`Server running  on port ${app.get("port")}`)
);
