'use strict';

console.log('js loaded');

//NOTES:__
//[Try structuring in this order]
//1. global variables
//2. setup a constructor
//3. set up instance methods that I will attach to the constructor
//4. actually attach the instance methods to the prototype
//5. runner code: actually do stuff

//Setup DOM for printing cookie sales per hour and total cookie sales

function printSalesToPage(id, totalCookieSalesPerHr, totalCookieSalesPerDay) {
  var hours = [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm'
  ];
  console.log('total cookie sales' + totalCookieSalesPerHr.length);
  //take array out of function
  //one function generate header; one function store data five timesdom

  for (var i = 0; i < totalCookieSalesPerHr.length; i++) {
    var li = document.createElement('li');
    var hour = hours[i];
    li.textContent = hour + ' : ' + totalCookieSalesPerHr[i];
    document.getElementById(id).appendChild(li);
  }
  li = document.createElement('li');
  li.textContent = 'Total Cookies' + ' : ' + totalCookieSalesPerDay;
  document.getElementById(id).appendChild(li);
}

//Generate random number of customers per hour

//Replace object literals with a single construction function

function getRandomIntInRange(low, high) {
  return Math.random() * (high - low) + low;
}

function getRandomCustPerHr() {
  return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
}

function getTotalCookieSalesPerHr() {
  for (var i = 0; i < this.totalHrs; i++) {
    this.avgCookieSalesPerHr.push(
      Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
    );
  }
  return this.avgCookieSalesPerHr;
}

function getTotalCookiesPerDay() {
  var totalCookiesPerDay = 0;
  for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
    totalCookiesPerDay += this.avgCookieSalesPerHr[i];
  }
  return totalCookiesPerDay;
}
//setup constructor function
function Store(name, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalHrs = 14;
  this.avgCookieSalesPerHr = [];
}

Store.prototype.getRandomCustPerHr = getRandomCustPerHr;
Store.prototype.generateTotalCookieSalesPerHr = getTotalCookieSalesPerHr;
Store.prototype.generateTotalCookiesPerDay = getTotalCookiesPerDay;
Store.prototype.render = function() {
  //insert code to add to the Table
  // creates and appends its row to the table

  // 1. add the name of the store to a new row in the tbody
  // grab the tbody and assign the node to a variable
  var tbody = document.querySelector('tbody');
  // create the new row node
  var tr = document.createElement('tr');
  // append the row node to the tbody
  tbody.appendChild(tr);

  // create a new td node to go in the tr
  var nameTd = document.createElement('td');
  // set the text content of the new td node to the name of the store
  nameTd.textContent = this.name;
  // append the td node to the new row
  tr.appendChild(nameTd);

  // 2. add all of the hourly cookie sales values to the same row

  this.generateTotalCookieSalesPerHr();
  for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
    var hourlyCookieSalesTd = document.createElement('td');
    // create a new td node to go in the tr
    // set the text content of the new td node to the name of the store
    hourlyCookieSalesTd.textContent = this.avgCookieSalesPerHr[i]; // NOTE: this should be the cookie sales in the hour

    // append the td node to the new row
    tr.appendChild(hourlyCookieSalesTd);
  }

  // 3. add the daily location total to the same row

  // create a new td node to go in the tr
  var dailyLocationTotalTd = document.createElement('td');
  // set the text content of the new td node to the name of the store
  this.generateTotalCookieSalesPerHr();
  dailyLocationTotalTd.textContent = this.generateTotalCookiesPerDay();
  // append the td node to the new row
  tr.appendChild(dailyLocationTotalTd);
};

function addTableHeaderRow() {
  // select table from html using dom method
  var tableHeaderRow = document.querySelector('thead tr');
  var hours = [
    '',
    '6:00am',
    '7:00am',
    '8:00am',
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '6:00pm',
    '7:00pm',
    'Daily Location Total'
  ];
  // grab each item of the array....use for loop
  for (var i = 0; i < hours.length; i++) {
    // create the td node
    var hourTdNode = document.createElement('td');
    // set the text of the td node with the hour string
    hourTdNode.textContent = hours[i];
    // this will make it visible in the page since it's being added to the dom
    tableHeaderRow.appendChild(hourTdNode);
  }
}

// Create table
// 1. add table header row
addTableHeaderRow();

//create store instances
var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
pikeStore.render();
var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
seatacStore.render();
var seattlecentreStore = new Store('Seattle Center', 11, 38, 3.7);
seattlecentreStore.render();
var capitolhillStore = new Store('Capitol Hill', 20, 38, 2.3);
capitolhillStore.render();
var alkiStore = new Store('Alki', 2, 16, 4.6);
alkiStore.render();

