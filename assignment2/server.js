const http = require('http');
const pug = require("pug");
const fs = require("fs");
const path = require("path");

const renderHome = pug.compileFile('pug/views/pages/index.pug');
const renderStats = pug.compileFile("pug/views/pages/stats.pug");

let restaurants = []; //Array to hold all restaurant objects.
let orderStats = []; //Will be used to hold order data.
let numOfOrders = 0; //Sets number of orders to 0.

const directoryPath = path.join(__dirname, 'restaurants');

//Passing directoryPath and callback function.
fs.readdir(directoryPath, function(err, files) {
	if (err) { //Handles error if error exists.
		return console.log("Unable to scan directory: " + err);
	}
	files.forEach(function (file) { //Reading through each restaurant file.
		fs.readFile('restaurants/' + file, function(err, data) {
			if(err) throw err;
			let myObj = JSON.parse(data); //Converting to object.
			restaurants.push(myObj); //Adding object to array.
		});
	});
});

//Helper function to send a 404 error
function send404(response){
	response.statusCode = 404;
	response.write("Unknown resource.");
	response.end();
}

//Helper function to send a 500 error
function send500(response){
	response.statusCode = 500;
	response.write("Server error.");
	response.end();
}

//Creating server
const server = http.createServer(function (request, response) {
	console.log("URL: " + request.url);
	if(request.method === "GET"){
		if(request.url === "/" || request.url === "/index.html"){
			let content = renderHome({});
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.end(content);
			return;
		}else if (request.url === "/order"){
			fs.readFile("orderform.html", function(err, data){
				if(err){
					send500(response);
					return;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/html");
				response.end(data);
				return;
			});
		}else if (request.url === "/client.js"){
			fs.readFile("client.js", function(err, data){
				if(err){
					send500(response);
					return;
				}
				response.statusCode = 200;
				response.end(data);
				return;
			});
		}else if (request.url === "/names"){
			response.statusCode = 200;
			response.readyState = 4;
			let resNames = {};
			for (let i = 0; i < restaurants.length; i++) {
				resNames[i] = restaurants[i].name;
			}
			let data = JSON.stringify(resNames);
			response.end(data);
			return;
		}else if (request.url === "/restaurants"){
			response.statusCode = 200;
			response.readyState = 4;
			let data = JSON.stringify(restaurants);
			response.end(data);
			return;
		}else if (request.url === "/stats"){
			let content = renderStats({orderStats: orderStats, restaurants: restaurants, numOfOrders: numOfOrders});
			response.statusCode = 200;
			response.setHeader("Content-Type", "text/html");
			response.end(content);
			return;
		}

	}else if(request.method === "POST"){
		if(request.url === "/stats"){
			let body = ""
			request.on('data', (chunk) => {
				body += chunk;
			})
			request.on('end', () => {
				let order = JSON.parse(body);
				orderStats = order;
				index += 1;
				numOfOrders += 1;
				console.log(orderStats);
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/html");
				response.end("http://127.0.0.1:3000/stats");
			})
		}
	}else{
		send404(response);
	}
});

//Server listens on port 3000
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
