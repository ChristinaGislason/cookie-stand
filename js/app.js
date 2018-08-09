'use strict';

console.log('js loaded');

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

var allStores = [];

//NOTES:__
//[Try structuring in this order]
//1. global variables
//2. setup a constructor
//3. set up instance methods that will attach to the constructor /DONE
//4. actually attach the instance methods to the prototype
//5. runner code: actually do stuff

//Setup constructor function
function Store(name, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalHrs = 14;
  this.avgCookieSalesPerHr = [];
  allStores.push(this);
}

//Attach method to prototype
Store.prototype.getRandomCustPerHr = getRandomCustPerHr;
Store.prototype.getTotalCookieSalesPerHr = getTotalCookieSalesPerHr;
Store.prototype.getTotalCookiesPerDay = getTotalCookiesPerDay;
Store.prototype.render = function() {
  // 1. add the name of the store to a new row in the tbody
  var tbody = document.querySelector('tbody');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  var nameTd = document.createElement('td');

  nameTd.textContent = this.name;
  tr.appendChild(nameTd);

  // 2. add all of the hourly cookie sales values to the same row
  this.getTotalCookieSalesPerHr();
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
  dailyLocationTotalTd.textContent = this.getTotalCookiesPerDay();
  // append the td node to the new row
  tr.appendChild(dailyLocationTotalTd);
};

//Generate random number of customers per hour
function getRandomIntInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomCustPerHr() {
  return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
}

function getTotalCookieSalesPerHr() {
  this.avgCookieSalesPerHr = [];
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

function addTableHeaderRow() {
  // select table from html using dom method
  var tableHeaderRow = document.querySelector('thead tr');

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

addTableHeaderRow();

function addTableFooterRow(allStoresCookiesSalesPerHr) {
  var table = document.querySelector('table');
  var tfoot = document.createElement('tfoot');
  var footerRow = document.createElement('tr');
  var totalsTd = document.createElement('td');
  totalsTd.textContent = 'Total Hourly Sales';
  footerRow.appendChild(totalsTd);

  var totalSales = 0;

  for (var i = 0; i < allStoresCookiesSalesPerHr[0].length; i++) {
    var total = 0;
    for (var j = 0; j < allStoresCookiesSalesPerHr.length; j++) {
      total += allStoresCookiesSalesPerHr[j][i];
      totalSales += allStoresCookiesSalesPerHr[j][i];
    }
    var totalTd = document.createElement('td');
    totalTd.textContent = total;
    footerRow.appendChild(totalTd);
  }
  table.appendChild(tfoot);
  tfoot.appendChild(footerRow);

  var lastTd = document.createElement('td');
  lastTd.textContent = totalSales;
  footerRow.appendChild(lastTd);
}

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

// create array of store arrays containing values for total cookie sales per hour
addTableFooterRow([
  pikeStore.avgCookieSalesPerHr,
  seatacStore.avgCookieSalesPerHr,
  seattlecentreStore.avgCookieSalesPerHr,
  capitolhillStore.avgCookieSalesPerHr,
  alkiStore.avgCookieSalesPerHr
]);

// when a user submits the form, display that information in the table
var formEl = document.getElementById('storeForm');
formEl.addEventListener('submit', function(e) {
  e.preventDefault(); //prevents page from reloading after submit
  console.log('Form submitted');
  var storeCreatedFromForm = new Store(
    e.target.name.value,
    Number(e.target.minCustPerHr.value),
    Number(e.target.maxCustPerHr.value),
    Number(e.target.avgCookiePerCust.value)
  );
  storeCreatedFromForm.render();

  var storeAdditionArr = [];
  for (var i = 0; i < allStores.length; i++) {
    storeAdditionArr.push(allStores[i].avgCookieSalesPerHr);
  }

  var table = document.getElementById('table');
  table.deleteTFoot();

  addTableFooterRow(storeAdditionArr);
});

