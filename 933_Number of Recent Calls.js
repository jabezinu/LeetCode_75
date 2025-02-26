var RecentCounter = function() {
  this.stream = [];
};

RecentCounter.prototype.ping = function(t) {
  this.stream.push(t); // Every time we receive a ping, add the time to the stream of integers
  /*
  To exclude the times that are not included within the range of t - 3000,
  we remove the first element from the stream while it is less than the calculated range 
  */
  while (this.stream[0] < t - 3000) { 
      this.stream.shift();
  } 
  // When the loop ends, the length of calls will be the length of the array
  return this.stream.length;
};

// Usage:
const recentCounter = new dorBell();
console.log(recentCounter.ping(1));    // Output: 1
console.log(recentCounter.ping(100));  // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3