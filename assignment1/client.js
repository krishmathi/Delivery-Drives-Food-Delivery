let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers w/ Chips",
				description: "Blackened beyond recognition.",
				price: 13.33

			},
			9: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			10: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			11: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			12: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			13: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: {
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: {
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}

		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [aragorn, legolas, frodo];

//Drop Down Menu - Dynamically Allocated
let restaurantNames = document.getElementById("restaurantNames");
for (let i = 0; i < restaurants.length; i++) {
	let restaurant = document.createElement("option");
	restaurant.value = restaurants[i];
	restaurant.innerHTML = restaurants[i].name;
	restaurantNames.appendChild(restaurant);
}

//Global variables to be used by different functions.
let finalSub = document.getElementById("subtotal");
let finalTax = document.getElementById("tax");
let finalDelivery = document.getElementById("deliveryFee");
let finalTotal = document.getElementById("total");
let finalMin = document.getElementById("minimum");
let order = document.getElementById("order");
let mySubmit = document.getElementById("mySubmit");
let subtotal = 0.0;
let tax = 0.0;
let delivery = 0.0;
let total = 0.0;
let minimum = 0.0;

//Gets restaurant info based on which restaurant is selected on the Drop Down Menu.
function getRestaurant(restaurants) {
	console.log("getRestaurant");

	for (let i = 0; i < restaurants.length; i++) {
		let restaurantNames = document.getElementById("restaurantNames");
		let selectedValue = restaurantNames.options[restaurantNames.selectedIndex].text;
		let menu = document.getElementById("menu");

		if (restaurants[i].name == selectedValue) {
			confirmRestaurant(); //Checks if total is greater than 0 to prompt message.
			clearPage(); //Clears page to erase previous restaurant info.

			//Displays name, min order and price for each restaurant.
			let basicInfo = document.getElementById("basicInfo");
			basicInfo.innerHTML = "Name: " + restaurants[i].name + " | Minimum Order: $" + restaurants[i].min_order + " | Delivery Charge: $" + restaurants[i].delivery_charge;

			let obj = restaurants[i].menu;

			//Iterates through and appends each category.
			Object.keys(obj).forEach((category, index) => {

				let menuCategory = document.createElement("h3");
				menuCategory.innerHTML = category;
				menuCategory.id = category;
				menu.appendChild(menuCategory);
				let menuItems = obj[category];

				//Iterates through and appends menu item, price, description and add image.
				Object.keys(menuItems).forEach((items, index) => {
					let menuOption = document.createElement("p");
					let menuDescription = document.createElement("p");

					menuOption.innerHTML = "<strong>" + menuItems[items].name +"</strong>" + " | $" + menuItems[items].price.toFixed(2);
					menuDescription.innerHTML = menuItems[items].description;

					let add = document.createElement("img");
					add.src = "add.png";
					add.width = 17;
					add.length = 17;
					add.id = menuItems[items].name;
					add.onclick = function () {addOption(restaurants, add.id)};

					menu.appendChild(menuOption);
					menu.appendChild(menuDescription);
					menu.appendChild(add);

					addCategory(restaurants); //Add category links to the Categories section of page.
				});
			});
		}
	}
}

//Adds item from menu onto Order Summary column.
function addOption(restaurants, id) {
	console.log("addOption");

	for (let i = 0; i < restaurants.length; i++) {
		let obj = restaurants[i].menu;

		delivery = restaurants[i].delivery_charge;
		minimum = restaurants[i].min_order;

		Object.keys(obj).forEach((category, index) => {
			let menuItems = obj[category];
			Object.keys(menuItems).forEach((items, index) => {

				//If item is selected, changes subtotal, tax, and total price.
				if (id == menuItems[items].name) {
					//Calls function to list menu items selected.
					orderList(menuItems[items].name, menuItems[items].price);

					subtotal += menuItems[items].price;
					tax += menuItems[items].price * 0.10;
					total = subtotal + tax + delivery;
					minimum = minimum - subtotal;

					finalSub.innerHTML = "Subtotal: $";
					finalSub.innerHTML += (subtotal).toFixed(2);

					finalTax.innerHTML = "Tax: $";
					finalTax.innerHTML += tax.toFixed(2);

					finalDelivery.innerHTML = "Delivery Charge: $";
					finalDelivery.innerHTML += delivery.toFixed(2);

					finalTotal.innerHTML = "Total: $";
					finalTotal.innerHTML += total.toFixed(2);

					//If min order is met, allows user to order.
					if (subtotal >= restaurants[i].min_order) {
						finalMin.innerHTML = "";
						mySubmit.disabled = false;
					}
					//Else displays message add x amount of dollars.
					else {
						finalMin.innerHTML = "Add $";
						finalMin.innerHTML += minimum.toFixed(2);
						finalMin.innerHTML += " To Reach the Minimum Order.";
						mySubmit.disabled = true;
					}
				}
			});
		});
	}
}

//Adds categories based on restaurant selected.
function addCategory(restaurants) {
	console.log("addCategory");

	let restaurantNames = document.getElementById("restaurantNames");
	let selectedValue = restaurantNames.options[restaurantNames.selectedIndex].text;
	let categories = document.getElementById("categories");

	//Clears categories.
	categories.innerHTML = "";

	//Loops through all categories and appends to Categories section.
	for (let i = 0; i < restaurants.length; i++) {
		if (restaurants[i].name == selectedValue) {
			let obj = restaurants[i].menu;
			Object.keys(obj).forEach((category, index) => {
				let eachCategory = document.createElement("a");
				eachCategory.href = "#" + category;
				eachCategory.innerHTML = category + "</br>";
				categories.appendChild(eachCategory);
			});
		}
	}
}

//Give alert for order confirmation, reloads page.
function orderComfirmed() {
	console.log("orderComfirmed");
	alert("Order Confirmed! Thank you for using Delivery Drives!");
	clearPage();
	location.reload();
}

//Resets page to original state when called.
function clearPage() {
	menu.innerHTML = "";
	categories.innerHTML = "";
	finalSub.innerHTML = "";
	finalTax.innerHTML = "";
	finalDelivery.innerHTML = "";
	finalTotal.innerHTML = "";
	finalMin.innerHTML = "";
	order.innerHTML = "";
	mySubmit.disabled = true;

	subtotal = 0.0;
	tax = 0.0;
	delivery = 0.0;
	total = 0.0;
	minimum = 0.0;
	counter = 0;
}

//Lists all menu items currently in the cart and shows remove image.
function orderList(name, price) {
	console.log("orderList");

	let element = document.createElement("p");
	element.innerHTML = name + " | $" + price.toFixed(2);

	let remove = document.createElement("img");
	remove.src = "remove.png";
	remove.width = 17;
	remove.length = 17;
	remove.id = name;
	remove.onclick = function () {removeOption(restaurants, remove.id, element, remove)};
	order.appendChild(element);
	order.appendChild(remove);
}

//If order exists asks for confirmation to switch if total > 0.
function confirmRestaurant() {
	if (total > 0) {
		let confirmed = confirm("Are you sure you would like to switch restaurants?");
		if (confirmed == true) {
			clearPage();
		}
	}
}

//Removes menu item if remove image is clicked.
function removeOption(restaurants, id, element, remove) {
	console.log("removeOption");

	for (let i = 0; i < restaurants.length; i++) {
		let obj = restaurants[i].menu;
		delivery = restaurants[i].delivery_charge;
		minimum = restaurants[i].min_order;

		Object.keys(obj).forEach((category, index) => {
			let menuItems = obj[category];
			Object.keys(menuItems).forEach((items, index) => {

				if (id == menuItems[items].name) {
					subtotal -= menuItems[items].price;
					tax -= menuItems[items].price * 0.10;
					total = subtotal + tax + delivery;
					minimum = minimum - subtotal;

					finalSub.innerHTML = "Subtotal: $";
					finalSub.innerHTML += (subtotal).toFixed(2);

					finalTax.innerHTML = "Tax: $";
					finalTax.innerHTML += tax.toFixed(2);

					finalDelivery.innerHTML = "Delivery Charge: $";
					finalDelivery.innerHTML += delivery.toFixed(2);

					finalTotal.innerHTML = "Total: $";
					finalTotal.innerHTML += total.toFixed(2);

					//If min order isn't met, show message.
					if (subtotal <= restaurants[i].min_order) {
						finalMin.innerHTML = "Add $";
						finalMin.innerHTML += minimum.toFixed(2);
						finalMin.innerHTML += " To Reach the Minimum Order.";
						mySubmit.disabled = true;

					}
					//If nothing is in cart, remove everything in order summary.
					if (total.toFixed(2) == delivery) {
						finalSub.innerHTML = "";
						finalTax.innerHTML = "";
						finalDelivery.innerHTML = "";
						finalTotal.innerHTML = "";
						finalMin.innerHTML = "";
						order.innerHTML = "";
						mySubmit.disabled = true;

						subtotal = 0.0;
						tax = 0.0;
						delivery = 0.0;
						total = 0.0;
						minimum = 0.0;
					}
					//Removes menu item and remove button.
					element.remove();
					remove.remove();
				}
			});
		});
	}
}
