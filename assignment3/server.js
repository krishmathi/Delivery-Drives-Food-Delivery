const express = require('express');
const app = express();
const config = require("./config.json");

app.locals.nextProductID = config.nextProductID;

app.use(express.urlencoded({extended:false}));

app.set("view engine", "pug");
app.set("views", "./views");

//Router for Browse Restaurants Page
let restaurantsRouter = require("./restaurants-router");
app.use("/restaurants", restaurantsRouter);

//Router for Add Restaurant Page
let addRouter = require("./add-router");
app.use("/addrestaurant", addRouter);

//Respond with Home Page Data if Requested
app.get("/", (req, res, next)=> { res.render("pages/index"); });

app.listen(3000);
console.log("Server listening at http://localhost:3000");
