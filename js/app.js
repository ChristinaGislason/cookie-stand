
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated


//Generate random number of customers per hour

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//Total Cookie Sales for Store 1

var store1= {
  location:'1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 6.3,
  totalHrs: 14,
  avgCookieSalesPerHr: [],
  totalCookieSalesPerHr: function () {
    for (var i=0; i < this.totalHrs; i++){
      this.avgCookieSalesPerHr.push(Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr()));
    }
  }
};

store1.totalCookieSalesPerHr();
console.log(store1.avgCookieSalesPerHr);


//Total Cookie Sales for Store 2

// var store2 = {
//   location:'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiePerPerson: 1.2,
//   totalHours: 14,
//   avgCookieSalesPerHour: [],
//   totalCookieSales: function () {
//     for (var i=0; i < this.totalHours; i++){
//       this.avgCookieSalesPerHour.push(Math.floor(this.avgCookiePerPerson * getRandomInt(this.minCust, this.maxCust)));
//       console.log(this.avgCookieSalesPerHour);
//     }
//   }
// };

// //store2.totalCookieSales();

// //Total Cookie Sales for Store 3

// var store3= {
//   location:'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiePerPerson: 3.7,
//   totalHours: 14,
//   avgCookieSalesPerHour: [],
//   totalCookieSales: function () {
//     for (var i=0; i < this.totalHours; i++){
//       this.avgCookieSalesPerHour.push(Math.floor(this.avgCookiePerPerson * getRandomInt(this.minCust, this.maxCust)));
//       console.log(this.avgCookieSalesPerHour);
//     }
//   }
// };

// store3.totalCookieSales();

// //Total Cookie Sales for Store 4

// var store4= {
//   location:'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiePerPerson: 2.3,
//   totalHours: 14,
//   avgCookieSalesPerHour: [],
//   totalCookieSales: function () {
//     for (var i=0; i < this.totalHours; i++){
//       this.avgCookieSalesPerHour.push(Math.floor(this.avgCookiePerPerson * getRandomInt(this.minCust, this.maxCust)));
//       console.log(this.avgCookieSalesPerHour);
//     }
//   }
// };

// store4.totalCookieSales();

// //Total Cookie Sales for Store 5

// var store5 = {
//   location:'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiePerPerson: 4.6,
//   totalHours: 14,
//   avgCookieSalesPerHour: [],
//   totalCookieSales: function () {
//     for (var i=0; i < this.totalHours; i++){
//       this.avgCookieSalesPerHour.push(Math.floor(this.avgCookiePerPerson * getRandomInt(this.minCust, this.maxCust)));
//       console.log(this.avgCookieSalesPerHour);
//     }
//   }
// };

// store5.totalCookieSales();

// //DOM for sales

// var el = document.createElement('ul');
// var newText = document.createTextNode('location');
// var el = document.createAttribute.createElement(totalCookieSales.'li')[3]