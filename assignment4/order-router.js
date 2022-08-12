const Order = require("./OrderModel");
const ObjectId = require('mongoose').Types.ObjectId
const express = require('express');
let router = express.Router();

router.get("/", loadOrders);
router.get("/", respondOrders);
router.get("/:id", sendSingleOrder);
router.post("/", createOrder);

//If ID exists, load order with that ID.
router.param("id", function(req, res, next, value) {
	let oid;
	console.log("Finding order by ID: " + value);
	try{
		oid = new ObjectId(value);
	}catch(err){
		res.status(404).send("Order ID " + value + " does not exist.");
		return;
	}

	Order.findById(value, function(err, result){
		if(err){
			console.log(err);
			res.status(500).send("Error reading order.");
			return;
		}

		if(!result){
			res.status(404).send("Order ID " + value + " does not exist.");
			return;
		}

		console.log("Result:");
		console.log(result);
		req.order = result;
		next();
	});
});

//Load all orders in Database.
function loadOrders(req, res, next) {
  Order.find()
  .where("order").exists()
  .exec(function(err, results) {
    if (err) {
      res.status(500).send("Error reading orders.");
      console.log(err);
      return;
    }
    res.orders = results;
    next();
    return;
  });
}

//Respond with orders in Database.
function respondOrders(req, res, next) {
	res.format({
		"text/html": () => {res.render("pages/orders", {orders: res.orders, loggedin: req.session.loggedin, user: req.user} )},
		"application/json": () => {res.status(200).json(res.orders)}
	});
	next();
}

//Respond with single order if requested.
function sendSingleOrder(req, res, next) {
	res.format({
		"application/json": function(){ res.status(200).json(req.order); },
		"text/html": () => {res.render("pages/order", {order: req.order, loggedin: req.session.loggedin} )}
	});
	next();
}

//Create new order based on Order Form details.
function createOrder(req, res, next) {
  let body = "";
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    let order = JSON.parse(body);

    let o = new Order();
    o.username = req.session.username;
    o.restaurantID = order.restaurantID;
    o.restaurantName = order.restaurantName;
    o.subtotal = order.subtotal;
    o.total = order.total;
    o.fee = order.fee;
    o.tax = order.tax;
    o.order = order.order;

    o.save(function(err, result) {
      if (err) {
        console.log(err);
        res.status(500).send("Error creating order.");
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("http://localhost:3000/orders");
    });
  });
}

//Export router to mount on server.
module.exports = router;
