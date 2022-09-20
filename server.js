const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const appointmentRoutes = require("./routes/appointment");

require("dotenv").config({path: "./config/.env"})

require("./config/passport")(passport)

connectDB()

app.set("view enginge", "ejs")

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(logger("dev"));

app.use(methodOverride("_method"))

app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.DB_STRING}),
    })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use("/", mainRoutes)
app.use("/appointment", appointmentRoutes)

app.listen(process.env.PORT, () => { 
    console.log("Server is running")
})