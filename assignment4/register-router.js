const express = require('express');
let router = express.Router();

router.get("/", respondRegister);

//Respond with register page if requested.
function respondRegister(req, res, next){
	res.render("pages/register")
}

//Export router to mount on server.
module.exports = router;
