const express = require("express");
let router = express.Router();

router.get("/", respondAddRestaurant);

//Renders Add Restaurant Page
function respondAddRestaurant(req, res, next) {
  res.render("pages/addrestaurant", {});
}

//Export Router to Mount on Main App
module.exports = router;
