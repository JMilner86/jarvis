const path = require("path");
const nodemailer = require("nodemailer");
const express = require("express");
const controllers = require("./controllers");
const sequelize = require("./config/connection");
const dotEnv = require("dotenv");
const session = require("express-session");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");
const handlebars = require("handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//const helpers = require('./utils/helpers');

const hbs = exphbs.create({}); //<-- potentially add helpers

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers"));

// const smtpTransport = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: "hellofromjarvis@outlook.com",
//     pass: "jarvis123",
//   },
// });
// var rand, mailOptions, host, link;

// app.get("/", function (req, res) {
//   res.sendFile("index.html");
// });

// app.get("/send", function (req, res) {
//   rand = Math.floor(Math.random() * 100 + 54);
//   host = req.get("host");
//   link = "http://" + req.get("host") + "/verify?id=" + rand;
//   mailOptions = {
//     to: req.query.to,
//     subject: "Please confirm your Email account",
//     html:
//       "Hello,<br> Please Click on the link to verify your email.<br><a href=" +
//       link +
//       ">Click here to verify</a>",
//   };
//   console.log(mailOptions);
// });

// smtpTransport.sendMail(mailOptions, function (error, response) {
//   if (error) {
//     console.log(error);
//     res.end("error");
//   } else {
//     console.log("Message sent: " + response.message);
//     res.end("sent");
//   }
// });

// app.get("/verify", function (req, res) {
//   console.log(req.protocol + ":/" + req.get("host"));
//   if (req.protocol + "://" + req.get("host") == "http://" + host) {
//     console.log("Domain is matched. Information is from Authentic email");
//     if (req.query.id == rand) {
//       console.log("email is verified");
//       res.end("<h1>Email " + mailOptions.to + " is been Successfully verified");
//     } else {
//       console.log("email is not verified");
//       res.end("<h1>Bad Request</h1>");
//     }
//   } else {
//     res.end("<h1>Request is from unknown source");
//   }
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
