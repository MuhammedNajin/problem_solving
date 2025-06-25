// Last updated: 6/25/2025, 3:33:09 PM
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const OFFSET = senate.length;
    const rediant = [];
    const dire = [];

    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'D') {
            dire.push(i);
        } else {
            rediant.push(i);
        }
    }
  console.log(rediant, dire)
    while(rediant.length > 0 && dire.length > 0) {
          const r = rediant.shift();
          const d = dire.shift();
        console.log(r, d)
          if(d > r) {
             rediant.push(r + OFFSET);
          } else {
             dire.push(d + OFFSET);
          }
    }

   return rediant.length > 0 ? 'Radiant' : "Dire";
};