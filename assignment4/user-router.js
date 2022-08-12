const mongoose = require("mongoose");
const User = require("./UserModel");
const Order = require("./OrderModel");
const express = require('express');
const ObjectId= require('mongoose').Types.ObjectId
let router = express.Router();

router.get("/", queryParser);
router.get("/", loadUsers);
router.get("/", respondUsers);
router.get("/:id", respondProfile);
router.post("/:id", updateProfile);

//Parses the query parameters.
function queryParser(req, res, next) {
	let params = [];
	for(prop in req.query){
		if(prop == "page"){
			continue;
		}
		params.push(prop + "=" + req.query[prop]);
	}
	req.qstring = params.join("&");

	if(!req.query.name){
		req.query.name = "?";
	}
	next();
}

//Loads users based on query paramters and privacy.
function loadUsers(req, res, next) {
	User.find()
	.where("username").regex(new RegExp(".*" + req.query.name + ".*", "i"))
	.where("privacy").equals(false)
	.exec(function(err, results){
		if(err){
			res.status(500).send("Error reading users.");
			console.log(err);
			return;
		}
		res.users = results;
		next();
		return;
	});
}

//Responds with users that are public and that show up in query parameters.
function respondUsers(req, res, next) {
	res.format({
		"text/html": () => {res.render("pages/users", {users: res.users, loggedin: req.session.loggedin, qstring: req.qstring} )},
		"application/json": () => {res.status(200).json(res.users)}
	});
	next();
}

//Responds with user profile if public and/or logged in as user.
function respondProfile(req, res, next) {
	if (req.user.privacy == false || (req.session.loggedin && req.session.username === req.user.username)) {
		res.format({
			"text/html": () => { res.render("pages/profile", {user: req.user, loggedin: req.session.loggedin, id: req.session.userID}); },
			"application/json": () => {res.status(200).json(req.user)}
		});
	}
	else {
		res.status(403).send("Profile does not exist or is set to private.");
	}
	next();
}

//Updates privacy if requested by user logged in.
function updateProfile(req, res, next) {
	let id = req.user._id;

	if (req.session.loggedin && req.session.username === req.user.username){
		if (req.body.privacy == "on") {
			mongoose.connection.db.collection("users").updateOne({_id: id}, {"$set": {"privacy": true}}, function(err, result){
				if (err) throw err;

				res.redirect("/users/" + id);
			});
		}
		else {
			mongoose.connection.db.collection("users").updateOne({_id: id}, {"$set": {"privacy": false}}, function(err, result){
				if (err) throw err;

				res.redirect("/users/" + id);
			});
		}
	}
	else {
		res.status(403).send("Cannot change profile of another user.");
	}
}

//If ID exists, load user with that ID.
router.param("id", function(req, res, next, value) {
	let oid;
	console.log("Finding user by ID: " + value);
	try{
		oid = new ObjectId(value);
	}catch(err){
		res.status(404).send("User ID " + value + " does not exist.");
		return;
	}

	User.findById(value, function(err, result){
		if(err){
			console.log(err);
			res.status(500).send("Error reading user.");
			return;
		}

		if(!result){
			res.status(404).send("User ID " + value + " does not exist.");
			return;
		}

		console.log("Result:");
		console.log(result);
		req.user = result;

		Order.find()
		.where("username").equals(req.user.username)
		.exec(function(err, results) {
			if(err){
				res.status(500).send("Error reading orders.");
				console.log(err);
				return;
			}
			//console.log("Hello: " + results);
			req.user.purchases = results;
			next();
			return;
		});

		if (req.session.loggedin && req.session.username === req.user.username){
			req.user.ownprofile = true;
		}
	});
});

//Export router to mount on server.
module.exports = router;
