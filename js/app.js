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
  console.log('total cookie sales' + totalCookieSalesPerHr.length)

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

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Store 1's random customers & cookie sales per hour, and total cookie sales

var store1 = {
  location: '1st and Pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 6.3,
  totalHrs: 14,
  avgCookieSalesPerHr: [],
  getTotalCookieSalesPerHr: function() {
    for (var i = 0; i < this.totalHrs; i++) {
      this.avgCookieSalesPerHr.push(
        Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
      );
    }
    return this.avgCookieSalesPerHr;
  },
  getTotalCookiesPerDay: function() {
    var totalCookiesPerDay = 0;
    for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
      totalCookiesPerDay += this.avgCookieSalesPerHr[i];
    }
    return totalCookiesPerDay;
  }
};

printSalesToPage(
  'first-and-pike',
  store1.getTotalCookieSalesPerHr(),
  store1.getTotalCookiesPerDay()
);

// Store 2's random customers & cookie sales per hour, and total cookie sales

var store2 = {
  location: 'SeaTac Airport',
  minCustPerHr: 3,
  maxCustPerHr: 24,
  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 1.2,
  totalHrs: 14,
  avgCookieSalesPerHr: [],
  getTotalCookieSalesPerHr: function() {
    for (var i = 0; i < this.totalHrs; i++) {
      this.avgCookieSalesPerHr.push(
        Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
      );
    }
    return this.avgCookieSalesPerHr;
  },
  getTotalCookiesPerDay: function() {
    var totalCookiesPerDay = 0;
    for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
      totalCookiesPerDay += this.avgCookieSalesPerHr[i];
    }
    return totalCookiesPerDay;
  }
};

printSalesToPage(
  'seatac-airport',
  store2.getTotalCookieSalesPerHr(),
  store2.getTotalCookiesPerDay()
);

// Store 3's random customers & cookie sales per hour, and total cookie sales

var store3 = {
  location: 'Seattle Center',
  minCustPerHr: 11,
  maxCustPerHr: 38,
  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 3.7,
  totalHrs: 14,
  avgCookieSalesPerHr: [],
  getTotalCookieSalesPerHr: function() {
    for (var i = 0; i < this.totalHrs; i++) {
      this.avgCookieSalesPerHr.push(
        Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
      );
    }
    return this.avgCookieSalesPerHr;
  },
  getTotalCookiesPerDay: function() {
    var totalCookiesPerDay = 0;
    for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
      totalCookiesPerDay += this.avgCookieSalesPerHr[i];
    }
    return totalCookiesPerDay;
  }
};

printSalesToPage(
  'seattle-center',
  store3.getTotalCookieSalesPerHr(),
  store3.getTotalCookiesPerDay()
);
// Store 4's random customers & cookie sales per hour, and total cookie sales

var store4 = {
  location: 'Capitol Hill',
  minCustPerHr: 20,
  maxCustPerHr: 38,
  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 2.3,
  totalHrs: 14,
  avgCookieSalesPerHr: [],
  getTotalCookieSalesPerHr: function() {
    for (var i = 0; i < this.totalHrs; i++) {
      this.avgCookieSalesPerHr.push(
        Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
      );
    }
    return this.avgCookieSalesPerHr;
  },
  getTotalCookiesPerDay: function() {
    var totalCookiesPerDay = 0;
    for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
      totalCookiesPerDay += this.avgCookieSalesPerHr[i];
    }
    return totalCookiesPerDay;
  }
};

printSalesToPage(
  'capitol-hill',
  store4.getTotalCookieSalesPerHr(),
  store4.getTotalCookiesPerDay()
);

// Store 5's random customers & cookie sales per hour, and total cookie sales

var store5 = {
  location: 'Alki',
  minCustPerHr: 2,
  maxCustPerHr: 16,

  getRandomCustPerHr: function() {
    return getRandomIntInRange(this.minCustPerHr, this.maxCustPerHr);
  },
  avgCookiePerCust: 4.6,
  totalHrs: 14,
  avgCookieSalesPerHr: [],

  getTotalCookieSalesPerHr: function() {
    for (var i = 0; i < this.totalHrs; i++) {
      this.avgCookieSalesPerHr.push(
        Math.floor(this.avgCookiePerCust * this.getRandomCustPerHr())
      );
    }
    return this.avgCookieSalesPerHr;
  },
  getTotalCookiesPerDay: function() {
    var totalCookiesPerDay = 0;
    for (var i = 0; i < this.avgCookieSalesPerHr.length; i++) {
      totalCookiesPerDay += this.avgCookieSalesPerHr[i];
    }
    return totalCookiesPerDay;
  }
};

printSalesToPage(
  'alki',
  store5.getTotalCookieSalesPerHr(),
  store5.getTotalCookiesPerDay()
);

