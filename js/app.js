'use strict';

console.log('js loaded');

//NOTES:
//[Try structuring in this order]
//1. global variables
//2. setup a constructor
//3. set up instance methods that I will attach to the constructor
//4. actually attach the instance methods to the prototype
//5. runner code: actually do stuff

//Setup DOM for printing cookie sales per hour and total cookie sales

console.log('1st', document.getElementById('first-and-pike'));

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

function getRandomIntInRange() {
  return (
    Math.random() * (this.maxCustPerHr - this.minCustPerHr) + this.minCustPerHr
  );
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

function Store(location, minCustPerHr, maxCustPerHr, avgCookiePerCust) {
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiePerCust = avgCookiePerCust;
  this.totalHrs = 14;
  this.avgCookieSalesPerHr = [];
}

Store.prototype.generateRandomNum = getRandomIntInRange;
Store.prototype.generateTotalCookieSalesPerHr = getTotalCookieSalesPerHr;
Store.prototype.generateTotalCookiesPerDay = getTotalCookiesPerDay;
Store.prototype.render = function() {
  //insert code to add to the Table
  //  creates and appends its row to the table
  // add a tr to tbody
  // inside the tr:
  // the first cell will have the store name
  // the cells after that will be the total cookies sold per hour for that store
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
    '7:00pm'
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

var pikeStore = new Store('first-and-pike', 23, 65, 6.3);
pikeStore.render();
var seatacStore = new Store('seatac-airport', 3, 24, 1.2);
var seattlecentreStore = new Store('seattle-center', 11, 38, 3.7);
var capitolhillStore = new Store('capitol-hill', 20, 38, 2.3);
var alkiStore = new Store('alki', 2, 16, 4.6);

// Store 1's random customers & cookie sales per hour, and total cookie sales

// var store1 = {
//   location: '1st and Pike',
//   minCustPerHr: 23,
//   maxCustPerHr: 65,
//   getRandomCustPerHr: function() {
//     return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
//   },
//   avgCookiePerCust: 6.3,
//   totalHrs: 14,
//   avgCookieSalesPerHr: [],
//   getTotalCookieSalesPerHr: function() {
//     for (var i = 0; i < this.totalHrs; i++) {
//       this.avgCookieSalesPerHr.push(
//         Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
//       );
//     }
//     return this.avgCookieSalesPerHr;
//   },
//   getTotalCookiesPerDay: function() {
//     var totalCookiesPerDay = 0;
//     for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
//       totalCookiesPerDay += this.avgCookieSalesPerHr[i];
//     }
//     return totalCookiesPerDay;
//   }
// };

// printSalesToPage(
//   'first-and-pike',
//   store1.getTotalCookieSalesPerHr(),
//   store1.getTotalCookiesPerDay()
// );

// Store 2's random customers & cookie sales per hour, and total cookie sales

// var store2 = {
//   location: 'SeaTac Airport',
//   minCustPerHr: 3,
//   maxCustPerHr: 24,
//   getRandomCustPerHr: function() {
//     return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
//   },
//   avgCookiePerCust: 1.2,
//   totalHrs: 14,
//   avgCookieSalesPerHr: [],
//   getTotalCookieSalesPerHr: function() {
//     for (var i = 0; i < this.totalHrs; i++) {
//       this.avgCookieSalesPerHr.push(
//         Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
//       );
//     }
//     return this.avgCookieSalesPerHr;
//   },
//   getTotalCookiesPerDay: function() {
//     var totalCookiesPerDay = 0;
//     for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
//       totalCookiesPerDay += this.avgCookieSalesPerHr[i];
//     }
//     return totalCookiesPerDay;
//   }
// };

// printSalesToPage(
//   'seatac-airport',
//   store2.getTotalCookieSalesPerHr(),
//   store2.getTotalCookiesPerDay()
// );

// // Store 3's random customers & cookie sales per hour, and total cookie sales

// // var store3 = {
// //   location: 'Seattle Center',
// //   minCustPerHr: 11,
// //   maxCustPerHr: 38,
// //   getRandomCustPerHr: function() {
// //     return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
// //   },
// //   avgCookiePerCust: 3.7,
// //   totalHrs: 14,
// //   avgCookieSalesPerHr: [],
// //   getTotalCookieSalesPerHr: function() {
// //     for (var i = 0; i < this.totalHrs; i++) {
// //       this.avgCookieSalesPerHr.push(
// //         Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
// //       );
// //     }
// //     return this.avgCookieSalesPerHr;
// //   },
// //   getTotalCookiesPerDay: function() {
// //     var totalCookiesPerDay = 0;
// //     for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
// //       totalCookiesPerDay += this.avgCookieSalesPerHr[i];
// //     }
// //     return totalCookiesPerDay;
// //   }
// // };

// printSalesToPage(
//   'seattle-center',
//   store3.getTotalCookieSalesPerHr(),
//   store3.getTotalCookiesPerDay()
// );
// // Store 4's random customers & cookie sales per hour, and total cookie sales

// // var store4 = {
// //   location: 'Capitol Hill',
// //   minCustPerHr: 20,
// //   maxCustPerHr: 38,
// //   getRandomCustPerHr: function() {
// //     return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
// //   },
// //   avgCookiePerCust: 2.3,
// //   totalHrs: 14,
// //   avgCookieSalesPerHr: [],
// //   getTotalCookieSalesPerHr: function() {
// //     for (var i = 0; i < this.totalHrs; i++) {
// //       this.avgCookieSalesPerHr.push(
// //         Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
// //       );
// //     }
// //     return this.avgCookieSalesPerHr;
// //   },
// //   getTotalCookiesPerDay: function() {
// //     var totalCookiesPerDay = 0;
// //     for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
// //       totalCookiesPerDay += this.avgCookieSalesPerHr[i];
// //     }
// //     return totalCookiesPerDay;
// //   }
// // };

// // printSalesToPage(
// //   'capitol-hill',
// //   store4.getTotalCookieSalesPerHr(),
// //   store4.getTotalCookiesPerDay()
// // );

// // // Store 5's random customers & cookie sales per hour, and total cookie sales

// // var store5 = {
// //   location: 'Alki',
// //   minCustPerHr: 2,
// //   maxCustPerHr: 16,

// //   getRandomCustPerHr: function() {
// //     return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
// //   },
// //   avgCookiePerCust: 4.6,
// //   totalHrs: 14,
// //   avgCookieSalesPerHr: [],

// //   getTotalCookieSalesPerHr: function() {
// //     for (var i = 0; i < this.totalHrs; i++) {
// //       this.avgCookieSalesPerHr.push(
// //         Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
// //       );
// //     }
// //     return this.avgCookieSalesPerHr;
// //   },
// //   getTotalCookiesPerDay: function() {
// //     var totalCookiesPerDay = 0;
// //     for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
// //       totalCookiesPerDay += this.avgCookieSalesPerHr[i];
// //     }
// //     return totalCookiesPerDay;
// //   }
// // };

// printSalesToPage(
//   'alki',
//   store5.getTotalCookieSalesPerHr(),
//   store5.getTotalCookiesPerDay()
