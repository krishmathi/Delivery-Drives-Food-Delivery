const express = require("express");
const fs = require("fs");

let router = express.Router();

//Requests for Restaurants and Specific IDs.
router.get("/", [loadRestaurants, respondRestaurants]);
router.get("/:id", sendRestaurant);
router.post("/", express.json(), createRestaurant);
router.put("/:id", express.json(), updateRestaurant);

//Update Restaurant Data
function updateRestaurant(req, res, next) {
  console.log(req.body);

  if (req.params.id < req.app.locals.nextProductID) {
    fs.writeFile("./restaurants/" + req.params.id + ".json", JSON.stringify(req.body), function(err) {
      if (err) {
        console.log("Error: " + err);
        res.status(500).send("Probably didn't write file properly.");
        return;
      }
      res.json(req.body);
    });
  }
  else {
    res.status(404).send("Unknown Restaurant ID.")
  }
}

//Create New Restaurant
function createRestaurant(req, res, next) {
  console.log(req.body);
  let restaurant = {};

  restaurant.name = req.body.name;
  restaurant.min_order = req.body.min_order;
  restaurant.delivery_fee = req.body.delivery_fee;
  restaurant.id = req.app.locals.nextProductID;
  restaurant.menu = {};
  req.app.locals.nextProductID++;

  fs.writeFile("./restaurants/" + restaurant.id + ".json", JSON.stringify(restaurant), function(err) {
    if (err) {
      console.log("Error: " + err);
      res.status(500).send("Probably didn't write file properly.");
      return;
    }
    res.redirect("http://localhost:3000/restaurants/" + restaurant.id);
  });
}

//Send Restaurant Data to ID Page
function sendRestaurant(req, res, next) {
  console.log(req.params.id);

  fs.readFile("./restaurants/" + req.params.id + ".json", function(err, data) {
    if (err) {
      res.status(404).send("Restaurant doesn't exist.");
      return;
    }

    let restaurant = JSON.parse(data);

    res.format({
      "text/html" : function() { res.render("pages/restaurant", {restaurant}); },
      "application/json" : function() { res.json(restaurant) }
    });

    return;
  });
}

//Loads List of Restaurants
function loadRestaurants(req, res, next) {
  fs.readdir("./restaurants", function(err, files) {
    if (err) {
      res.status(500).send("Error reading files.");
      return;
    }
    res.restaurants = [];
    let completed = 0;

    for (let i = 0; i < req.app.locals.nextProductID; i++) {
      fs.readFile("./restaurants/" + files[i], function(err, data) {
        if (err) {
          res.status(500).send("Error.");
          return;
        }
        res.restaurants.push(JSON.parse(data));
        completed++;

        if (completed == req.app.locals.nextProductID) {
          next();
        }
      });
    }
  });
}

//Displays List of Restaurants in Text/HTML or JSON
function respondRestaurants(req, res, next) {
  let restaurantIDs = [];
  let restaurantArray = {"restaurants": []};

  for (let i = 0; i < req.app.locals.nextProductID; i++) {
    restaurantIDs.push(res.restaurants[i].id);
  }

  restaurantArray.restaurants = restaurantIDs;

  res.format({
    "text/html" : function() { res.render("pages/restaurants", {restaurants: res.restaurants}); },
    "application/json" : function() { res.json(restaurantArray) }
  });
}

//Export Router to Mount on Main App
module.exports = router;
