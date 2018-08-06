

Pat's Salmon Cookies, soon with franchises all over town, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:


Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property of the object representing that location

Display the values of each array as unordered lists in the browser

function addStore() {
    console.log(this.store); 


var store1: {
  location:'1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3
}
var store2: {
  location:'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2
  }
			
var store3: {
        location:'Seatle Center',
        minCust: 11,
        maxCust: 38,
        avgCookieSale: 3.7
      }

var store4: {
        location:'Capitol Hill',
        minCust: 20,
        maxCust: 38,
        avgCookieSale: 2.3
      }

var			store5: {
        location:'Alki',
        minCust: 2,
        maxCust: 16,
        avgCookieSale: 4.6
      }
 
}