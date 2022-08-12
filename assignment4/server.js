const express = require('express');
const app = express();
const mongoose = require("mongoose");
const User = require("./UserModel");
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/tokens',
  collection: 'sessions'
});

app.set("view engine", "pug");
app.use(session({ secret: 'some secret here'}))
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//Router for User Data.
let userRouter = require("./user-router");
app.use("/users", userRouter);

//Router for to load register page.
let registerRouter = require("./register-router");
app.use("/register", registerRouter);

//Router for Order Data.
let orderRouter = require("./order-router");
app.use("/orders", orderRouter);

//Respond with home page data if requested.
app.get("/", function(req, res) {
  mongoose.connection.db.collection("config").findOne({id: "mainpage"}, function(err, result) {
    if(err) {
      res.status(500).send("Error reading main page config.");
      return;
    }
    res.render("pages/index", {loggedin: req.session.loggedin, id: req.session.userID});
  });
});

//Redirect to proper profile page.
app.get("/profile", function(req, res, next) {
  res.redirect("/users/" + req.session.userID);
});

//Login user if valid credentials.
app.post("/login", function(req, res, next){
	if(req.session.loggedin){
		res.redirect("/");
		return;
	}

	let username = req.body.username;
	let password = req.body.password;

	mongoose.connection.db.collection("users").findOne({username: username, password: password}, function(err, result){
		if(err)throw err;

		if(result){
			req.session.loggedin = true;
			req.session.username = username;
      req.session.password = password;
      req.session.userID = result._id;
			res.redirect("/");
		}else{
			res.status(401).send("Not authorized. Invalid username and/or password.");
			return;
		}
	});
});

//Register user if valid credentials.
app.post("/register", function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  mongoose.connection.db.collection("users").findOne({username: username}, function(err, result){
    if(err) throw err;

    if(result) {
      console.log("User already exists.");
      req.session.invalid = true;
      res.render("pages/register", {invalid: req.session.invalid});
    }
    else {
      let u = new User();
      u.username = username;
      u.password = password;
      u.privacy = false;

      u.save(function(err, result) {
        if(err) {
          console.log(err);
          res.status(500).send("Error creating User.");
          return;
        }
        req.session.loggedin = true;
  			req.session.username = username;
        req.session.password = password;
        req.session.userID = u.id;
        res.redirect("/users/" + u.id);
      });
    }
  });
});

//Logout user if requested.
app.get("/logout", function(req, res, next) {
	req.session.loggedin = false;
	res.redirect("/");
});

mongoose.connect("mongodb://localhost:27017/a4", {useNewUrlParser: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	app.listen(3000);
	console.log("Server listening on port 3000");
});
