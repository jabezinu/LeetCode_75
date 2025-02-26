/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const queueR = [], queueD = [];
  let temp = senate.length;

  // Populate queues with indices of Radiant and Dire senators
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') queueR.push(i);
    else queueD.push(i);
  }

  let currentIndex = 0;
  // Simulate the voting process
  while (queueD.length > currentIndex && queueR.length > currentIndex) {
    if (queueD[currentIndex] < queueR[currentIndex]) queueD.push(temp++);
    else queueR.push(temp++);
    ++currentIndex;
  }

  // Determine the winner
  // if (queueD.length > queueR.length) return 'Dire';
  // return 'Radiant';

  return [queueR, queueD]
};


console.log(predictPartyVictory("RDRRDDD"));