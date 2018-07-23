'use strict';

function Phone(brand, screen, ram, memory, price, color) {
	this.brand = brand;
	this.screen = screen;
	this.ram = ram;
	this.memory = memory;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", screen size is " + this.screen + ", RAM - " + this.ram + ", memory is " + this.memory + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.applyDiscount = function(discount) {
	this.price = this.price - discount;
}

var iPhone6S = new Phone("Apple", "4.6", "2GB", "16GB", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", "5.1", "3GB", "32GB", 1399 ,"black");
var onePlusOne = new Phone("OnePlus", "5.5", "3GB", "64GB", 1899 , "black");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
onePlusOne.applyDiscount(1000);
onePlusOne.printInfo();